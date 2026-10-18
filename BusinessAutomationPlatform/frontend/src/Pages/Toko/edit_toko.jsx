import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import serviceAll from "../../Services/serviceAll";

const edit_toko = () => {
    const { id } = useParams();
    const [dataLama, setdataLama] = useState(null)

    useEffect(()=>{
        // Gunakan ID tersebut untuk mengambil data dari API
        // optional chaining (?.) agar React tidak membaca properti dari objek yang masih 
        const getDataId = async () =>{
            const result = await serviceAll.getId(`/toko/${id}`);
            // console.log("hasil Data",result);
            setdataLama(result);
        }
        if (id) getDataId()
    },[id]);
    
    const handleChange = (e) =>{
        const {name, value} = e.target // ambil name dan value dari object e.target
        // bagaimana cara ambil name dan value nya untuk di simpan ke SetDataLama jawab [name]:value
        // spread tadi untuk menyalin property dari object yang sudah ada ke object baru.
        setdataLama({
            // A. Pertahankan semua data lama
            ...dataLama,
            // B. Perbarui field yang berubah
            [name]:value
        })
        // setdataLama( (Updata) =>({
        //     ...Updata,
        //     [name]:value
        // }));
    }

    const PostData =  async (e) =>{
        e.preventDefault(); // Mencegah reload halaman saat submit
        const dataBaru =  JSON.stringify(dataLama);
        console.log("Data yang akan di post",dataBaru)
        try {
            const response = await serviceAll.put(`/toko/${id}`, dataLama);
            console.log("Data berhasil disimpan:", response);
            alert("Data toko berhasil disimpan!");

            // Kosongkan input setelah berhasil
            if (response != 0) {
                setdataLama({
                    name : "",
                    symbol : "",
                })
            }

        } catch (err) {
            console.error("Gagal menyimpan data:", err);
        }

    }

    return(
       <div className="conFrom">
            <form onSubmit={PostData}>
                <label>
                    Nama toko :
                    <input 
                        type="text" 
                        name="name" 
                        required 
                        value={dataLama?.name || "" } // Ditambah || "" agar tidak error saat render awal 
                        onChange={handleChange}
                        />
                </label>
                <label>
                    Symbol :
                    <input 
                    type="text" 
                    name="symbol"
                    required 
                    value={dataLama?.symbol || ""}
                    onChange={handleChange}
                     />
                </label>
                <button type="submit">simpan</button>
            </form>
        </div>
    )
}

export default edit_toko