import Button from "react-bootstrap/esm/Button";
import serviceAll from "../../Services/serviceAll";

const TabelAction =({
 id,
})=> {
    const Edit = (id) =>{
        console.log("Id nya", id);

    }

    const Delete = (id) => {
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (isConfirmed) {
            // Jalankan fungsi hapus di sini
            console.log("Data dihapus", id);
        }
    }

    return (
               <td>
                   <Button variant="primary" onClick={() => Edit(id)} className="btn-save"> Edit </Button>

                   <Button variant="danger" onClick={() => Delete(id)} className="btn-save" > Delete </Button>

               </td>
                
            
        
    )
}

export default TabelAction;