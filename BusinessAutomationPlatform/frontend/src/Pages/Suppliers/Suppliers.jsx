import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import DataTable from "../../Components/Tabel/DataTable";
import AppButton from "../../Components/Common/Button/ButtonSave";
import AppModal from "../../Components/Common/Modal/modal";

import { suppliers } from "../../Datasementara/suppliers";
import { supplierColumns } from "../../config/tableConfig/supplierColumns";
import { useState } from "react";
import Loading from "../../Components/Common/Loading/loading";
import ConfirmDialog from "../../Components/Common/ConfirmDialog/ConfirmDialog";

const SupplierList = () => {
    // arry yang menjelaskan keaddan state
    const [showModal, setShowModal] =
        useState(false);


    // Contoh penggunaan ConfirmDialog
    const [showConfirm, setShowConfirm] =
    useState(false);
    const [selectedSupplier, setSelectedSupplier] =
        useState(null);
    // ketika delete
    const handleDeleteClick = (supplier) => 
    {
        setSelectedSupplier(supplier);
        setShowConfirm(true);
    };

    return (

        <div className="page-container">

            <div className="
                d-flex
                justify-content-between
                align-items-center
                mb-4
            ">
                {/* cara menggunkan Modal */}
                <AppButton
                    onClick={() => setShowModal (true)}
                >
                    Tambah Supplier dengan Modal
                </AppButton>

                <AppModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title="Tambah Supplier dengan Modal"
                >
                    <p>
                        Form Supplier akan berada di sini
                    </p>
                </AppModal>

                {/* cara menggunakan Loading */}
                <Loading text="Memuat Data supplier"/>

                {/* Contoh penggunaan ConfirmDialog */}
                <AppButton onClick={() => handleDeleteClick(suppliers[0])}>
                    Tes Confirm
                </AppButton>
                <ConfirmDialog
                    show={showConfirm}
                    onCancel={() =>
                        setShowConfirm(false)
                    }
                    onConfirm={() => {
                        console.log(
                            "Delete:",
                            selectedSupplier
                        );
                        setShowConfirm(false);
                    }}
                    title="Hapus Supplier"
                    message={`Apakah Anda yakin ingin menghapus ${selectedSupplier?.company_name}?`}
                />

                <div>

                    <h2>
                        Supplier
                    </h2>

                    <p className="text-muted">
                        Daftar supplier
                    </p>

                </div>

                <AppButton disabled={true} >
                    Add Supplier
                </AppButton>

            </div>


            <Card>

                <Card.Body>

                    <DataTable
                        columns={supplierColumns}
                        data={suppliers}
                        rowsPerPage={25}
                    />

                </Card.Body>

            </Card>

        </div>

    );
};

export default SupplierList;