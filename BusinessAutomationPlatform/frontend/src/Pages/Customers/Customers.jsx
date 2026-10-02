import AppModel from "../../Components/Common/Modal/modal";
import DataTable from "../../Components/Tabel/DataTable";

// import { customers } from "../../Datasementara/customers";
import { customerColumns } from "../../config/tableConfig/customerColumns";
import { useEffect, useState } from "react";
import AppModal from "../../Components/Common/Modal/modal";
import AppButton from "../../Components/Common/Button/ButtonSave";
import serviceAll from "../../Services/serviceAll";


const CustomerList = () => {

    const [showModal, setShowModal]=
            useState(false);

    const [data, setData]= useState([]);
    useEffect(()=>{
        const loadData = async () => {
            const getData = await serviceAll.getAll('/customer');
            setData(getData)
        }
        loadData();
    },[]);

    return (

        <div>
            <AppModal
                show={showModal}
                onHide={() => setShowModal(false)} // false agar popup hilang
                title="Tambah Customer"
            >
                <p>add from akan ada disini</p>
            </AppModal>
            <AppButton
                onClick={() => setShowModal(true)} // true agar tombol tampil
            >
                add Suplier dari modal
            </AppButton>

            <h2 className="mb-4">
                Customer
            </h2>

            <DataTable
                columns={customerColumns}
                data={data}
                rowsPerPage={25}
            />

        </div>

    );
};

export default CustomerList;