import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import serviceAll from "../../Services/serviceAll";

const TabelAction =({
 id,
 editPath,
 deletePath
})=> {

    const navigate = useNavigate();
    const Edit = (id) =>{
            try {
                // 2. arahkan ke halaman edit dan bawa editPath dan id
                console.log("edit Path", editPath, id);
                navigate(`${editPath}/${id}`)
            } catch (error) {
                // Tampilkan di terminal tetap menggunakan console.error
                console.error("Gagal mengambil data:", error.message || error);
            }
        }

    const Delete = (id) => {
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (isConfirmed) {
            // Jalankan fungsi hapus di sini
            const DeletProcess = async () => {
            const del = await serviceAll.delete(`${deletePath}/${id}`)
             return del.data;
            }
            DeletProcess();
            
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