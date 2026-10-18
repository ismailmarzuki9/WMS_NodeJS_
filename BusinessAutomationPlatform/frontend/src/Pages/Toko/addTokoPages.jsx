import { useEffect, useState } from "react";
import serviceAll from "../../Services/serviceAll";

const addTokoPages = ()=> {
    const PostData= async (event) => {
        event.preventDefault(); // menjegah halaman reload ?
        console.log("POST Data")
        // Ambil data dari form
        const formData = new FormData(event.target);

        const data ={
            name : formData.get("name"),
            symbol : formData.get("symbol")
        }

        try {
            // Kirim data ke backend
            const response = await serviceAll.post("/Posttoko", data);

            console.log("Data berhasil disimpan:", response);
            alert("Data toko berhasil disimpan!");

            // Kosongkan input setelah berhasil
            event.target.reset();
        } catch (error) {
            console.error("Gagal menyimpan data:", error);
            alert("Data toko gagal disimpan!");
        }
    }

    return (

        <div className="conFrom">
            <form onSubmit={PostData}>
                <label>
                    Nama toko :
                    <input type="text" name="name" required />
                </label>
                <label>
                    Symbol :
                    <input type="text" name="symbol"required />
                </label>
                <button type="submit">simpan</button>
            </form>
        </div>
    )
}
export default addTokoPages;