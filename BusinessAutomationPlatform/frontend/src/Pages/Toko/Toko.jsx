import ModalDialog from "react-bootstrap/esm/ModalDialog";
import AppButton from "../../Components/Common/Button/ButtonSave";
import AddTokoPages from "./addTokoPages";
import { useState } from "react";
const Toko = () =>{

    const [form, setForm]= useState(false);
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

            
        </div>
    )
}
export default Toko