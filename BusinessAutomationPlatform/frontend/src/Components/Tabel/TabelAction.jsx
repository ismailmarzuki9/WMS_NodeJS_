import Button from "react-bootstrap/esm/Button";
import serviceAll from "../../Services/serviceAll";

const TabelAction =({
 id,
})=> {
    
        const Edit = async (id) =>{
            console.log("Id nya", id);
            // 1. get data berdasrakan id
            try {
                const getData = await serviceAll.getId(`/toko/${id}`);
                console.log(getData);                
            } catch (error) {
                // Tampilkan di terminal tetap menggunakan console.error
                console.error("Gagal mengambil data:", error.message || error);

            }

            // 2. arahkan ke halaman edit dan bawa data ang di get
        }

        

        

    

    const Delete = (id) => {
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (isConfirmed) {
            // Jalankan fungsi hapus di sini
            // const DeletProcess = await () => {
            // const respons = await serviceAll.delete('/toko/delete',id)

            // }
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