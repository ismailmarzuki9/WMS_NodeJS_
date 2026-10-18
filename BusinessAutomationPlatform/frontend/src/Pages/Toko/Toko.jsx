import Card from "react-bootstrap/Card";
import ModalDialog from "react-bootstrap/esm/ModalDialog";
import AppButton from "../../Components/Common/Button/ButtonSave";
import AddTokoPages from "./addTokoPages";
// import EditTokoPages from "./edit_toko";
import { useEffect, useState } from "react";
import DataTabel from "../../Components/Tabel/DataTable";
import { tokoColumnts } from "../../config/tableConfig/tokoColumns";
import serviceAll from "../../Services/serviceAll";

const Toko = () =>{

    const [form, setForm]= useState(false);
    // const [div, setdiv]= useState(false);

    const [data, setData]=useState([])
    // useEffect(()=>{
    //     const loadData = async () =>{
    //         const respon = await serviceAll.getAll('/toko');
    //         setData(respon);
    //     }
    //     loadData()
    // },[])

    const loadData = async () => {
        try {
            const respon = await serviceAll.getAll("/toko");
            setData(respon);
        } catch (error) {
            console.error("Gagal mengambil data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return(
        <div className="container">
            <h1> Halaman Toko</h1>
            
            
            <AppButton
                onClick={()=> setForm(true)}
            >
                Add Toko
            </AppButton>

            {/* 2. Gunakan && untuk merender komponen saat bernilai true */}
            {form && <AddTokoPages/>  }


            {/* /* Tabel Toko */}
            <Card>
                <Card.Body>
                    <DataTabel
                    columns={tokoColumnts}
                    data={data}
                    rowsPerPage={5}
                    idField="toko_id"
                    editPath="/edit_toko"
                    deletePath="/toko/delete"
                    />
                </Card.Body>
            </Card>

            {/* { div && <EditTokoPages/>} */}


            
        </div>
    )
}
export default Toko