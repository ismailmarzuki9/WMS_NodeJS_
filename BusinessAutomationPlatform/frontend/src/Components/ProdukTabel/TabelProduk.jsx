// import { useMemo, useState } from "react";

// import Table from "react-bootstrap/Table";
// import Form from "react-bootstrap/Form";
// import Pagination from "react-bootstrap/Pagination";
// import Card from "react-bootstrap/Card";

// const ProductTable = () => {

//     const products = [
//         {
//             id: 1,
//             sku: "EL-001",
//             name: "Kabel NYM 2x1.5mm",
//             category: "Elektrikal",
//             unit: "Roll",
//             stock: 25,
//             status: "Aktif"
//         },
//         {
//             id: 2,
//             sku: "EL-002",
//             name: "Kabel NYA 1.5mm",
//             category: "Elektrikal",
//             unit: "Meter",
//             stock: 120,
//             status: "Aktif"
//         },
//         {
//             id: 3,
//             sku: "BM-001",
//             name: "Semen Portland 50kg",
//             category: "Bangunan",
//             unit: "Sak",
//             stock: 44,
//             status: "Aktif"
//         },
//         {
//             id: 4,
//             sku: "PL-001",
//             name: 'Pipa PVC 3" AW',
//             category: "Plumbing",
//             unit: "Batang",
//             stock: 46,
//             status: "Aktif"
//         }
//     ];


//     // ==========================
//     // PAGINATION
//     // ==========================

//     const rowsPerPage = 25;

//     const [currentPage, setCurrentPage] = useState(1);


//     // ==========================
//     // SORTING
//     // ==========================

//     const [sortConfig, setSortConfig] = useState({
//         key: null,
//         direction: "asc"
//     });


//     // ==========================
//     // FILTER
//     // ==========================

//     const [filters, setFilters] = useState({
//         sku: "",
//         name: "",
//         category: "",
//         unit: "",
//         status: ""
//     });


//     // ==========================
//     // FILTER DATA
//     // ==========================

//     const filteredProducts = useMemo(() => {

//         return products.filter(product => {

//             return (
//                 product.sku
//                     .toLowerCase()
//                     .includes(filters.sku.toLowerCase())

//                 &&

//                 product.name
//                     .toLowerCase()
//                     .includes(filters.name.toLowerCase())

//                 &&

//                 product.category
//                     .toLowerCase()
//                     .includes(filters.category.toLowerCase())

//                 &&

//                 product.unit
//                     .toLowerCase()
//                     .includes(filters.unit.toLowerCase())

//                 &&

//                 product.status
//                     .toLowerCase()
//                     .includes(filters.status.toLowerCase())
//             );

//         });

//     }, [products, filters]);


//     // ==========================
//     // SORTING
//     // ==========================

//     const sortedProducts = useMemo(() => {

//         const data = [...filteredProducts];

//         if (!sortConfig.key) {
//             return data;
//         }

//         data.sort((a, b) => {

//             const valueA = a[sortConfig.key];
//             const valueB = b[sortConfig.key];

//             if (valueA < valueB) {
//                 return sortConfig.direction === "asc"
//                     ? -1
//                     : 1;
//             }

//             if (valueA > valueB) {
//                 return sortConfig.direction === "asc"
//                     ? 1
//                     : -1;
//             }

//             return 0;

//         });

//         return data;

//     }, [filteredProducts, sortConfig]);


//     // ==========================
//     // PAGINATION
//     // ==========================

//     const totalPages = Math.ceil(
//         sortedProducts.length / rowsPerPage
//     );

//     const startIndex =
//         (currentPage - 1) * rowsPerPage;

//     const currentProducts =
//         sortedProducts.slice(
//             startIndex,
//             startIndex + rowsPerPage
//         );


//     // ==========================
//     // SORT FUNCTION
//     // ==========================

//     const handleSort = (key) => {

//         let direction = "asc";

//         if (
//             sortConfig.key === key &&
//             sortConfig.direction === "asc"
//         ) {
//             direction = "desc";
//         }

//         setSortConfig({
//             key,
//             direction
//         });
//     };


//     // ==========================
//     // FILTER FUNCTION
//     // ==========================

//     const handleFilterChange = (key, value) => {

//         setFilters(prev => ({
//             ...prev,
//             [key]: value
//         }));

//         setCurrentPage(1);
//     };


//     // ==========================
//     // PAGE FUNCTION
//     // ==========================

//     const changePage = (page) => {

//         if (page < 1 || page > totalPages) {
//             return;
//         }

//         setCurrentPage(page);
//     };


//     return (

//         <Card>

//             <Card.Body>

//                 <h4 className="mb-4">
//                     Produk
//                 </h4>


//                 <div className="table-responsive">

//                     <Table
//                         hover
//                         bordered
//                         className="align-middle"
//                     >

//                         <thead>

//                             <tr>

//                                 {/* SKU */}

//                                 <th>

//                                     <div
//                                         onClick={() =>
//                                             handleSort("sku")
//                                         }
//                                         style={{
//                                             cursor: "pointer"
//                                         }}
//                                     >
//                                         SKU

//                                         {sortConfig.key === "sku" &&
//                                             (
//                                                 sortConfig.direction === "asc"
//                                                     ? " ↑"
//                                                     : " ↓"
//                                             )
//                                         }

//                                     </div>

//                                     <Form.Control
//                                         size="sm"
//                                         placeholder="Filter SKU"
//                                         value={filters.sku}
//                                         onChange={(e) =>
//                                             handleFilterChange(
//                                                 "sku",
//                                                 e.target.value
//                                             )
//                                         }
//                                     />

//                                 </th>


//                                 {/* NAME */}

//                                 <th>

//                                     <div
//                                         onClick={() =>
//                                             handleSort("name")
//                                         }
//                                         style={{
//                                             cursor: "pointer"
//                                         }}
//                                     >
//                                         Nama

//                                         {sortConfig.key === "name" &&
//                                             (
//                                                 sortConfig.direction === "asc"
//                                                     ? " ↑"
//                                                     : " ↓"
//                                             )
//                                         }

//                                     </div>

//                                     <Form.Control
//                                         size="sm"
//                                         placeholder="Filter nama"
//                                         value={filters.name}
//                                         onChange={(e) =>
//                                             handleFilterChange(
//                                                 "name",
//                                                 e.target.value
//                                             )
//                                         }
//                                     />

//                                 </th>


//                                 {/* CATEGORY */}

//                                 <th>

//                                     <div
//                                         onClick={() =>
//                                             handleSort("category")
//                                         }
//                                         style={{
//                                             cursor: "pointer"
//                                         }}
//                                     >
//                                         Category

//                                         {sortConfig.key === "category" &&
//                                             (
//                                                 sortConfig.direction === "asc"
//                                                     ? " ↑"
//                                                     : " ↓"
//                                             )
//                                         }

//                                     </div>

//                                     <Form.Control
//                                         size="sm"
//                                         placeholder="Filter"
//                                         value={filters.category}
//                                         onChange={(e) =>
//                                             handleFilterChange(
//                                                 "category",
//                                                 e.target.value
//                                             )
//                                         }
//                                     />

//                                 </th>


//                                 {/* UNIT */}

//                                 <th>

//                                     <div
//                                         onClick={() =>
//                                             handleSort("unit")
//                                         }
//                                         style={{
//                                             cursor: "pointer"
//                                         }}
//                                     >
//                                         Unit

//                                         {sortConfig.key === "unit" &&
//                                             (
//                                                 sortConfig.direction === "asc"
//                                                     ? " ↑"
//                                                     : " ↓"
//                                             )
//                                         }

//                                     </div>

//                                 </th>


//                                 {/* STOCK */}

//                                 <th>

//                                     <div
//                                         onClick={() =>
//                                             handleSort("stock")
//                                         }
//                                         style={{
//                                             cursor: "pointer"
//                                         }}
//                                     >
//                                         Stock

//                                         {sortConfig.key === "stock" &&
//                                             (
//                                                 sortConfig.direction === "asc"
//                                                     ? " ↑"
//                                                     : " ↓"
//                                             )
//                                         }

//                                     </div>

//                                 </th>


//                                 {/* STATUS */}

//                                 <th>

//                                     <div
//                                         onClick={() =>
//                                             handleSort("status")
//                                         }
//                                         style={{
//                                             cursor: "pointer"
//                                         }}
//                                     >
//                                         Status

//                                         {sortConfig.key === "status" &&
//                                             (
//                                                 sortConfig.direction === "asc"
//                                                     ? " ↑"
//                                                     : " ↓"
//                                             )
//                                         }

//                                     </div>

//                                     <Form.Control
//                                         size="sm"
//                                         placeholder="Filter"
//                                         value={filters.status}
//                                         onChange={(e) =>
//                                             handleFilterChange(
//                                                 "status",
//                                                 e.target.value
//                                             )
//                                         }
//                                     />

//                                 </th>

//                             </tr>

//                         </thead>


//                         <tbody>

//                             {currentProducts.length === 0 ? (

//                                 <tr>

//                                     <td
//                                         colSpan="6"
//                                         className="text-center py-4"
//                                     >
//                                         Data tidak ditemukan
//                                     </td>

//                                 </tr>

//                             ) : (

//                                 currentProducts.map(product => (

//                                     <tr key={product.id}>

//                                         <td>
//                                             {product.sku}
//                                         </td>

//                                         <td>
//                                             {product.name}
//                                         </td>

//                                         <td>
//                                             {product.category}
//                                         </td>

//                                         <td>
//                                             {product.unit}
//                                         </td>

//                                         <td>
//                                             {product.stock}
//                                         </td>

//                                         <td>
//                                             {product.status}
//                                         </td>

//                                     </tr>

//                                 ))

//                             )}

//                         </tbody>

//                     </Table>

//                 </div>


//                 {/* FOOTER */}

//                 <div className="
//                     d-flex
//                     justify-content-between
//                     align-items-center
//                     mt-3
//                 ">

//                     <div className="text-muted">

//                         Showing{" "}

//                         {sortedProducts.length === 0
//                             ? 0
//                             : startIndex + 1
//                         }

//                         {" "}to{" "}

//                         {Math.min(
//                             startIndex + rowsPerPage,
//                             sortedProducts.length
//                         )}

//                         {" "}of{" "}

//                         {sortedProducts.length}

//                         {" "}products

//                     </div>


//                     <Pagination>

//                         <Pagination.Prev
//                             disabled={currentPage === 1}
//                             onClick={() =>
//                                 changePage(
//                                     currentPage - 1
//                                 )
//                             }
//                         />


//                         {[...Array(totalPages)].map(
//                             (_, index) => {

//                                 const page =
//                                     index + 1;

//                                 return (

//                                     <Pagination.Item
//                                         key={page}
//                                         active={
//                                             page === currentPage
//                                         }
//                                         onClick={() =>
//                                             changePage(page)
//                                         }
//                                     >
//                                         {page}
//                                     </Pagination.Item>

//                                 );

//                             }
//                         )}


//                         <Pagination.Next
//                             disabled={
//                                 currentPage === totalPages
//                             }
//                             onClick={() =>
//                                 changePage(
//                                     currentPage + 1
//                                 )
//                             }
//                         />

//                     </Pagination>

//                 </div>

//             </Card.Body>

//         </Card>

//     );
// };

// export default ProductTable;