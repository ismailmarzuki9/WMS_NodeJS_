import Card from "react-bootstrap/Card";
import ModalDialog from "react-bootstrap/esm/ModalDialog";
import AppButton from "../../Components/Common/Button/ButtonSave";
import AddTokoPages from "./addTokoPages";
import { useEffect, useState } from "react";
import DataTabel from "../../Components/Tabel/DataTable";
import { tokoColumnts } from "../../config/tableConfig/tokoColumns";
import serviceAll from "../../Services/serviceAll";

const Toko = () =>{

    const [form, setForm]= useState(false);

    const [data, setData]=useState([])
    useEffect(()=>{
        const loadData = async () =>{
            const respon = await serviceAll.getAll('/toko');
            setData(respon);
        }
        loadData()
    },[])

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
                    />
                </Card.Body>
            </Card>


            
        </div>
    )
}
export default Toko