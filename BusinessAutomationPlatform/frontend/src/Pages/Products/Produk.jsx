// import TabelProduk from '../../Components/ProdukTabel/TabelProduk'

// const Produk = () => { /* cara menampilkan dengan return biasa sehingga perlu return di dalam function */
//     return(
//         <div className="card mt-5">
//             <TabelProduk/>
//         </div>
//     )
// }

// export default Produk;

import DataTable from "../../Components/Tabel/DataTable";

import { products } from "../../Datasementara/produk";
import { productColumns } from "../../config/tableConfig/productColumns";
import AppButton from '../../Components/Common/Button/ButtonSave';
import AppModal from "../../Components/Common/Modal/modal";
import { useState } from "react";

const ProductList = () => {

    const handleTambah = () => {
        console.log("Tambah Produk on click test");
    };
    
    const  [showModal, setShowModal] = 
        useState(false);

    return (

        <div>
            <AppButton onClick={handleTambah} > on click test</AppButton>
            
            <AppButton
                    onClick={() => setShowModal(true)}
                > Add Produk
            </AppButton>
            <AppModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title="Tambah Produk"
            >
                <p>from add Produk Akan beradadi sini</p>
            </AppModal>

            <h2 className="mb-4">
                Produk
            </h2>

            <DataTable
                columns={productColumns}
                data={products}
                rowsPerPage={25}
            />


        </div>

    );
};

export default ProductList;