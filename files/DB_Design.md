# Database Design
# Warehouse & Financial Ledger Management System

## 1. Entity Relationship Overview (deskripsi tekstual)

```
tenants ──< branches ──< product_stock >── products ──< product_categories
   │            │              │
   │            │              └──< stock_ledger >── (ref: PO / SO / transfer / opname)
   │            │
   │            ├──< purchase_orders ──< purchase_order_items >── products
   │            │         │
   │            │         └──< goods_receipts ──< goods_receipt_items
   │            │
   │            ├──< sales_invoices ──< sales_invoice_items >── products
   │            │
   │            ├──< stock_transfers ──< stock_transfer_items
   │            │
   │            ├──< stock_opnames ──< stock_opname_items
   │            │
   │            └──< cash_ledger >── (ref: PO / SO / manual entry) ──> cash_accounts
   │
   ├──< users ──< user_roles >── roles ──< role_permissions >── permissions
   ├──< suppliers
   ├──< customers
   └──< audit_logs
```

Catatan: `tenants` opsional jika sistem hanya untuk 1 usaha. Jika ingin dijual ke banyak UMKM sekaligus (SaaS), pertahankan `tenant_id` di semua tabel utama.

---

## 2. Skema Tabel Detail

### 2.1 `tenants` (opsional, untuk mode multi-usaha/SaaS)
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| name | VARCHAR | Nama usaha |
| created_at | TIMESTAMP | |

### 2.2 `branches` (cabang/gudang)
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| tenant_id | UUID (FK) | |
| name | VARCHAR | |
| address | TEXT | |
| is_main | BOOLEAN | Gudang pusat atau bukan |
| created_at | TIMESTAMP | |

### 2.3 `users`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| tenant_id | UUID (FK) | |
| branch_id | UUID (FK, nullable) | Default cabang user |
| name | VARCHAR | |
| email | VARCHAR (unique) | |
| password_hash | VARCHAR | |
| is_active | BOOLEAN | |
| created_at | TIMESTAMP | |

### 2.4 `roles`, `permissions`, `role_permissions`, `user_roles`
Standar RBAC many-to-many. `roles`: Owner, Admin Gudang, Kasir, Finance, Auditor. `permissions` granular per aksi (contoh: `stock.transfer.create`, `cash.expense.create`, `report.view`).

### 2.5 `product_categories`
| Kolom | Tipe |
|---|---|
| id | UUID (PK) |
| tenant_id | UUID (FK) |
| name | VARCHAR |

### 2.6 `products`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| tenant_id | UUID (FK) | |
| category_id | UUID (FK) | |
| sku | VARCHAR (unique per tenant) | |
| name | VARCHAR | |
| unit | VARCHAR | pcs, kg, box, dll |
| purchase_price | DECIMAL(15,2) | Harga beli rata-rata terakhir |
| selling_price | DECIMAL(15,2) | |
| reorder_point | INT | Ambang batas stok menipis |
| is_active | BOOLEAN | |
| created_at | TIMESTAMP | |

### 2.7 `product_stock` (tabel cache/ringkasan — bukan sumber kebenaran utama)
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| product_id | UUID (FK) | |
| branch_id | UUID (FK) | |
| quantity | DECIMAL(15,3) | Hasil akumulasi dari `stock_ledger`, di-update tiap transaksi dalam 1 DB transaction |
| updated_at | TIMESTAMP | |

> Unique constraint: `(product_id, branch_id)`

### 2.8 `stock_ledger` ⭐ (tabel inti — append only, tidak boleh di-update/delete)
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| tenant_id | UUID (FK) | |
| branch_id | UUID (FK) | |
| product_id | UUID (FK) | |
| type | ENUM | `PURCHASE_IN`, `SALES_OUT`, `TRANSFER_IN`, `TRANSFER_OUT`, `ADJUSTMENT_IN`, `ADJUSTMENT_OUT` |
| quantity | DECIMAL(15,3) | Selalu positif; arah ditentukan oleh `type` |
| reference_type | VARCHAR | `purchase_order`, `sales_invoice`, `stock_transfer`, `stock_opname` |
| reference_id | UUID | ID transaksi sumber |
| unit_cost | DECIMAL(15,2) | Untuk hitung HPP (harga pokok penjualan) |
| created_by | UUID (FK users) | |
| created_at | TIMESTAMP | |

### 2.9 `suppliers`
| Kolom | Tipe |
|---|---|
| id | UUID (PK) |
| tenant_id | UUID (FK) |
| name | VARCHAR |
| phone | VARCHAR |
| address | TEXT |

### 2.10 `purchase_orders`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| tenant_id | UUID (FK) | |
| branch_id | UUID (FK) | |
| supplier_id | UUID (FK) | |
| po_number | VARCHAR | |
| status | ENUM | `draft`, `approved`, `partially_received`, `completed`, `cancelled` |
| payment_status | ENUM | `unpaid`, `partial`, `paid` |
| total_amount | DECIMAL(15,2) | |
| created_by | UUID (FK) | |
| created_at | TIMESTAMP | |

### 2.11 `purchase_order_items`
| Kolom | Tipe |
|---|---|
| id | UUID (PK) |
| purchase_order_id | UUID (FK) |
| product_id | UUID (FK) |
| quantity_ordered | DECIMAL(15,3) |
| quantity_received | DECIMAL(15,3) |
| unit_price | DECIMAL(15,2) |

### 2.12 `goods_receipts` & `goods_receipt_items`
Mencatat penerimaan fisik barang (bisa partial dari PO). Setiap baris item yang diterima → generate 1 baris di `stock_ledger` (type `PURCHASE_IN`) + 1 baris di `cash_ledger` (jika bayar cash) atau update `accounts_payable`.

### 2.13 `accounts_payable` (hutang ke supplier — versi ringan)
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| purchase_order_id | UUID (FK) | |
| supplier_id | UUID (FK) | |
| amount | DECIMAL(15,2) | |
| due_date | DATE | |
| status | ENUM | `outstanding`, `paid` |

### 2.14 `customers`
| Kolom | Tipe |
|---|---|
| id | UUID (PK) |
| tenant_id | UUID (FK) |
| name | VARCHAR |
| phone | VARCHAR |

### 2.15 `sales_invoices` & `sales_invoice_items`
Mirip struktur PO tapi arah keluar. Setiap item terjual → 1 baris `stock_ledger` (type `SALES_OUT`, dengan `unit_cost` diambil dari harga beli terakhir untuk hitung HPP) + 1 baris `cash_ledger` (jika cash) atau `accounts_receivable` (jika kredit/tempo).

### 2.16 `accounts_receivable` (piutang dari pelanggan)
Struktur simetris dengan `accounts_payable`.

### 2.17 `stock_transfers` & `stock_transfer_items`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| from_branch_id | UUID (FK) | |
| to_branch_id | UUID (FK) | |
| status | ENUM | `pending`, `in_transit`, `received`, `cancelled` |
| requested_by | UUID (FK) | |
| created_at | TIMESTAMP | |

Item: `product_id`, `quantity`. Saat status `in_transit` → ledger `TRANSFER_OUT` di cabang asal. Saat `received` → ledger `TRANSFER_IN` di cabang tujuan.

### 2.18 `stock_opnames` & `stock_opname_items`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| branch_id | UUID (FK) | |
| status | ENUM | `draft`, `finalized` |
| conducted_by | UUID (FK) | |
| created_at | TIMESTAMP | |

Item: `product_id`, `system_quantity` (snapshot saat opname dibuat), `physical_quantity` (hasil hitung fisik), `difference` (computed). Saat `finalized`, selisih otomatis generate ledger `ADJUSTMENT_IN`/`ADJUSTMENT_OUT`.

### 2.19 `cash_accounts` (akun kas/bank)
| Kolom | Tipe |
|---|---|
| id | UUID (PK) |
| tenant_id | UUID (FK) |
| name | VARCHAR (Kas Tunai, BCA, GoPay Bisnis, dll) |
| type | ENUM (`cash`, `bank`, `ewallet`) |

### 2.20 `cash_ledger` ⭐ (tabel inti kedua — append only)
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | UUID (PK) | |
| tenant_id | UUID (FK) | |
| branch_id | UUID (FK) | |
| cash_account_id | UUID (FK) | |
| direction | ENUM | `IN`, `OUT` |
| category | ENUM/VARCHAR | `sales`, `purchase_payment`, `operational_expense`, `capital_injection`, `loan`, `receivable_payment`, `payable_payment`, dll |
| amount | DECIMAL(15,2) | |
| reference_type | VARCHAR | `sales_invoice`, `purchase_order`, `manual` |
| reference_id | UUID (nullable) | |
| description | TEXT | |
| created_by | UUID (FK) | |
| created_at | TIMESTAMP | |

### 2.21 `audit_logs`
| Kolom | Tipe |
|---|---|
| id | UUID (PK) |
| user_id | UUID (FK) |
| entity_type | VARCHAR |
| entity_id | UUID |
| action | VARCHAR (`create`, `update`, `void`) |
| old_value | JSONB |
| new_value | JSONB |
| created_at | TIMESTAMP |

---

## 3. Index & Constraint Penting

- `stock_ledger`: index pada `(product_id, branch_id, created_at)` — untuk hitung ulang stok cepat
- `cash_ledger`: index pada `(cash_account_id, created_at)` — untuk laporan kas per akun/periode
- `product_stock`: unique `(product_id, branch_id)` + row-level lock (`SELECT ... FOR UPDATE`) saat update quantity
- Semua tabel transaksi (`stock_ledger`, `cash_ledger`, `audit_logs`) **tidak punya kolom `deleted_at`/hard delete** — koreksi dilakukan dengan entri pembalik (reversing entry), bukan menghapus data lama

---

## 4. Strategi Concurrency (bagian paling menantang)

Saat 2 transaksi penjualan terjadi bersamaan untuk produk yang sama:

1. Mulai DB transaction
2. `SELECT quantity FROM product_stock WHERE product_id=? AND branch_id=? FOR UPDATE` (row lock, transaksi lain harus menunggu)
3. Validasi stok cukup
4. INSERT ke `stock_ledger`
5. UPDATE `product_stock.quantity`
6. INSERT ke `cash_ledger`
7. COMMIT

Alternatif untuk skala lebih besar: gunakan **Redis distributed lock** (per `product_id:branch_id`) sebelum transaksi DB, atau gunakan **optimistic locking** dengan kolom `version` di `product_stock` dan retry saat konflik.
