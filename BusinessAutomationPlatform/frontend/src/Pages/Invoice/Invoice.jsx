import { useEffect, useState } from "react";
import DataTable from "../../Components/Tabel/DataTable";
import { kolomInvoice } from "../../config/tableConfig/kolomInvoice";
import serviceAll from "../../Services/serviceAll";


const Invoice = () =>{

    const [data, setData]=useState([]);
    useEffect(()=>{
        const loadData = async () => {
            const result = await serviceAll.getAll('/stockMovment');
            setData(result)
        }
        loadData();
    },[]);
    
    return (
        <div>
            
            <DataTable
                columns={kolomInvoice}
                data={data}
                rowsPerPage={10}
            />
        </div>
    );
    

}

export default Invoice;