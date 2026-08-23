export const supplierColumns = [
    {
        key: "company_name",
        label: "Perusahaan",
        sortable: true,
        filterable: true
    },

    {
        key: "owner_name",
        label: "Pemilik",
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
        key: "email",
        label: "Email",
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