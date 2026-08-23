export const customerColumns = [
    {
        key: "name",
        label: "Nama",
        sortable: true,
        filterable: true
    },

    {
        key: "phone",
        label: "Telepon",
        sortable: true,
        filterable: true
    },

    {
        key: "address",
        label: "Alamat",
        sortable: false,
        filterable: true
    },

    // {
    //     key: "actions",
    //     label: "Aksi",
    //     sortable: false,
    //     filterable: false,
    //     render: (row) => (
    //         <div className="d-flex gap-2">
    //             <AppButton
    //                 variant="warning"
    //                 size="sm"
    //             >
    //                 Edit
    //             </AppButton>
    //             <AppButton
    //                 variant="danger"
    //                 size="sm"
    //                 onClick={() =>
    //                     handleDeleteClick(row)
    //                 }
    //             >
    //                 Delete
    //             </AppButton>
    //         </div>

    //     )
    // }

];