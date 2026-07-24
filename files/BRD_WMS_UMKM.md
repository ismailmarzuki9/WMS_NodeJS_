# Business Requirement Document (BRD)
# Warehouse & Financial Ledger Management System untuk UMKM

**Versi:** 1.0
**Tanggal:** 22 Juli 2026
**Disusun untuk:** Perancangan REST API berbasis Node.js

---

## 1. Executive Summary

Sistem ini dirancang untuk menjawab masalah nyata di UMKM Indonesia: **stok barang dan arus kas dicatat secara terpisah, manual, atau bahkan tidak dicatat sama sekali.** Akibatnya pemilik usaha tidak tahu:

- Berapa nilai stok yang sebenarnya dimiliki saat ini
- Berapa uang yang seharusnya masuk dari penjualan vs yang benar-benar diterima
- Kemana saja pengeluaran usaha "menguap" (biaya operasional tidak tercatat)
- Apakah usaha untung atau rugi secara riil (bukan cuma dari saldo kas di rekening)

Sistem ini menggabungkan dua hal yang biasanya dibuat terpisah: **manajemen stok (WMS)** dan **buku kas/ledger keuangan sederhana**, sehingga setiap pergerakan barang otomatis tercatat sebagai pergerakan uang (hutang/piutang/kas).

---

## 2. Problem Statement

| Masalah di lapangan | Dampak |
|---|---|
| Stok dicatat di buku tulis / Excel terpisah dari kas | Selisih stok tidak diketahui sampai terlambat |
| Pembelian dan penjualan tidak otomatis mengurangi/menambah kas | Laporan laba rugi tidak akurat |
| Tidak ada histori siapa mengubah stok dan kapan | Rawan kecurangan, sulit audit |
| Transfer barang antar toko/cabang tidak tercatat rapi | Barang "hilang" di tengah jalan |
| Biaya operasional (listrik, gaji, sewa) tidak masuk sistem | Owner tidak tahu margin riil |

---

## 3. Tujuan & Sasaran

1. Menyediakan **satu sumber kebenaran (single source of truth)** untuk stok dan kas.
2. Setiap transaksi stok (masuk/keluar/transfer/opname) **wajib** menghasilkan jejak transaksi keuangan (income/expense/hutang/piutang) secara otomatis.
3. Mendukung multi-cabang/multi-gudang.
4. Menghasilkan laporan sederhana yang bisa dibaca pemilik usaha tanpa latar belakang akuntansi: **Laporan Stok, Laporan Kas, Laporan Laba Rugi Sederhana**.
5. Menjadi backend REST API yang bisa dikonsumsi oleh aplikasi kasir/mobile yang sudah kamu punya sebelumnya.

---

## 4. Ruang Lingkup

### In Scope
- Master data: produk, kategori, satuan, supplier, pelanggan, gudang/cabang, akun kas
- Purchasing (pembelian ke supplier) & Goods Receipt (penerimaan barang)
- Sales/Outbound (penjualan/pengeluaran barang)
- Stock Transfer antar cabang
- Stock Opname (penyesuaian stok fisik)
- Cash/Financial Ledger (income, expense, hutang, piutang)
- Reporting: Stock Report, Cash Flow Report, Simple P&L
- Auth & Role-based Access Control
- Audit log semua perubahan stok & kas

### Out of Scope (fase awal)
- Akuntansi penuh (jurnal umum, neraca lengkap, pajak)
- Payroll/penggajian
- E-commerce/online store front-end
- Multi-currency

---

## 5. Stakeholder & User Roles

| Role | Hak Akses Utama |
|---|---|
| **Owner/Admin Pusat** | Full access semua cabang, approval PO besar, lihat semua laporan keuangan |
| **Admin Gudang/Cabang** | Kelola stok cabangnya, terima barang, ajukan transfer, stock opname |
| **Kasir/Sales** | Input penjualan (mengurangi stok, mencatat pemasukan) |
| **Finance/Bendahara** | Kelola pengeluaran non-stok (biaya operasional), rekonsiliasi kas, approval pembayaran hutang |
| **Auditor (read-only)** | Lihat semua histori & laporan tanpa bisa mengubah data |

---

## 6. Functional Requirements

### 6.1 Master Data Management
- CRUD produk (kode, nama, kategori, satuan, harga beli, harga jual, minimum stok/reorder point)
- CRUD supplier & pelanggan
- CRUD gudang/cabang
- CRUD akun kas (kas tunai, bank, dompet digital)

### 6.2 Purchasing & Goods Receipt
- Buat Purchase Order (PO) ke supplier
- Approval PO (opsional, tergantung nominal)
- Penerimaan barang (Goods Receipt) — bisa partial/sebagian dari PO
- Otomatis: stok bertambah + kewajiban tercatat sebagai **hutang (accounts payable)** atau **kas keluar langsung** jika bayar cash

### 6.3 Sales/Outbound
- Input transaksi penjualan (dari aplikasi kasir eksisting via API atau input manual)
- Otomatis: stok berkurang + **kas masuk** (jika cash) atau **piutang** (jika kredit/tempo)
- Validasi stok tidak boleh minus (kecuali mode "backorder" diaktifkan)

### 6.4 Stock Transfer Antar Cabang
- Buat permintaan transfer dari Cabang A ke Cabang B
- Status: `pending → in_transit → received`
- Stok di cabang asal berkurang saat dikirim, stok cabang tujuan bertambah saat dikonfirmasi diterima
- Tidak memengaruhi kas (transfer internal)

### 6.5 Stock Opname (Penyesuaian)
- Input jumlah fisik hasil hitung manual
- Sistem hitung selisih vs stok sistem
- Selisih otomatis membuat entri **stock adjustment** + jika bernilai material, bisa dicatat sebagai **kerugian/expense**

### 6.6 Cash/Financial Ledger
- Input manual untuk pengeluaran non-stok: biaya operasional, gaji, sewa, listrik
- Input manual untuk pemasukan non-penjualan: modal masuk, pinjaman
- Semua transaksi otomatis dari modul stok (6.2, 6.3) muncul di ledger ini
- Rekonsiliasi kas harian (saldo awal, mutasi, saldo akhir)

### 6.7 Reporting
- Laporan Stok: nilai stok saat ini, stok menipis (below reorder point), kartu stok per produk
- Laporan Kas: kas masuk vs keluar per periode, per kategori
- Laporan Laba Rugi Sederhana: total penjualan − HPP (harga pokok penjualan) − biaya operasional
- Export ke Excel/PDF

### 6.8 Auth & RBAC
- JWT-based authentication
- Role & permission granular per modul
- Multi-tenant ready (setiap usaha/cabang terisolasi datanya)

### 6.9 Audit Trail
- Setiap perubahan stok dan kas dicatat: siapa, kapan, nilai sebelum/sesudah, referensi transaksi

---

## 7. Non-Functional Requirements

| Kategori | Kebutuhan |
|---|---|
| **Concurrency** | Transaksi stok/kas harus atomik (DB transaction + row locking) agar tidak terjadi race condition saat 2 transaksi mengubah stok produk yang sama secara bersamaan |
| **Konsistensi Data** | Stok saat ini harus selalu bisa direkonstruksi ulang dari histori ledger (append-only ledger, bukan cuma angka yang di-overwrite) |
| **Auditability** | Semua mutasi harus punya jejak, tidak boleh ada hard delete pada data transaksi |
| **Skalabilitas** | Mendukung multi-cabang dengan jumlah transaksi harian menengah (ribuan/hari) |
| **Keamanan** | Password hashing (bcrypt/argon2), rate limiting, validasi input ketat |
| **Performance** | Query laporan tidak boleh menghitung ulang dari nol tiap request — gunakan tabel ringkasan (summary table) yang di-update via job/trigger |

---

## 8. Prinsip Arsitektur Kunci: "Ledger, Bukan Angka"

Ini bagian paling penting secara desain. Jangan menyimpan stok sebagai **satu angka yang di-update terus-menerus** (`UPDATE products SET stock = stock - 1`), karena:
- Rawan race condition
- Tidak ada histori "kenapa stok bisa segini"
- Sulit audit dan sulit dikoreksi

**Solusi:** gunakan pola **immutable ledger** (mirip pembukuan akuntansi/double-entry sederhana):
- Setiap pergerakan stok = 1 baris baru di `stock_ledger` (IN/OUT/TRANSFER/ADJUSTMENT)
- Stok saat ini = `SUM(quantity)` dari semua baris ledger produk tersebut (di-cache di tabel `product_stock` untuk performa, tapi bisa direkonstruksi ulang kapan saja)
- Begitu juga kas: setiap transaksi = 1 baris baru di `cash_ledger`, saldo = akumulasi

Pola yang sama juga berlaku untuk aplikasi kasir yang sudah kamu buat — jadi ilmu ini transferable.

---

## 9. Roadmap MVP (disarankan bertahap)

| Fase | Modul |
|---|---|
| **Fase 1** | Auth, Master data, Purchasing + Goods Receipt, Stock Ledger dasar |
| **Fase 2** | Sales/Outbound, Cash Ledger, Laporan Stok & Kas dasar |
| **Fase 3** | Stock Transfer antar cabang, Stock Opname |
| **Fase 4** | Laporan Laba Rugi, RBAC granular, Audit log lengkap |
| **Fase 5** | Notifikasi (stok menipis, hutang jatuh tempo), dashboard real-time |

---

*Lanjut ke dokumen: **Database Design (ERD & Schema)** dan **Alur Bisnis Proses** pada file terpisah.*
