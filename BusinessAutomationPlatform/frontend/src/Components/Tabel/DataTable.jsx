import { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";

import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";

const DataTable = ({
    columns,
    data,
    rowsPerPage = 25,
    loading = false,
    // renderActions={renderActions}
}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: "asc"
    });

    const [filters, setFilters] = useState({});

    /*
    |--------------------------------------------------------------------------
    | FILTER
    |--------------------------------------------------------------------------
    */

    const filteredData = useMemo(() => {

        return data.filter(item => {

            return columns.every(column => {

                const filterValue =
                    filters[column.key];

                if (!filterValue) {
                    return true;
                }

                const value =
                    item[column.key];

                if (value === null || value === undefined) {
                    return false;
                }

                return String(value)
                    .toLowerCase()
                    .includes(
                        filterValue.toLowerCase()
                    );
            });

        });

    }, [data, columns, filters]);


    /*
    |--------------------------------------------------------------------------
    | SORT
    |--------------------------------------------------------------------------
    */

    const sortedData = useMemo(() => {

        const result = [...filteredData];

        if (!sortConfig.key) {
            return result;
        }

        result.sort((a, b) => {

            const valueA =
                a[sortConfig.key];

            const valueB =
                b[sortConfig.key];

            if (valueA < valueB) {
                return sortConfig.direction === "asc"
                    ? -1
                    : 1;
            }

            if (valueA > valueB) {
                return sortConfig.direction === "asc"
                    ? 1
                    : -1;
            }

            return 0;
        });

        return result;

    }, [filteredData, sortConfig]);


    /*
    |--------------------------------------------------------------------------
    | PAGINATION
    |--------------------------------------------------------------------------
    */

    const totalPages = Math.ceil(
        sortedData.length / rowsPerPage
    );

    const startIndex =
        (currentPage - 1) * rowsPerPage;

    const currentData =
        sortedData.slice(
            startIndex,
            startIndex + rowsPerPage
        );


    /*
    |--------------------------------------------------------------------------
    | SORT HANDLER
    |--------------------------------------------------------------------------
    */

    const handleSort = (key) => {

        let direction = "asc";

        if (
            sortConfig.key === key &&
            sortConfig.direction === "asc"
        ) {
            direction = "desc";
        }

        setSortConfig({
            key,
            direction
        });
    };


    /*
    |--------------------------------------------------------------------------
    | FILTER HANDLER
    |--------------------------------------------------------------------------
    */

    const handleFilter = (key, value) => {

        setFilters(prev => ({
            ...prev,
            [key]: value
        }));

        setCurrentPage(1);
    };


    /*
    |--------------------------------------------------------------------------
    | PAGE
    |--------------------------------------------------------------------------
    */

    const handlePageChange = (page) => {

        setCurrentPage(page);
    };


    /*
    |--------------------------------------------------------------------------
    | LOADING
    |--------------------------------------------------------------------------
    */

    if (loading) {
        return (
            <div className="text-center p-4">
                Loading...
            </div>
        );
    }


    return (

        <div className="data-table">

            <div className="table-responsive">

                <Table
                    hover
                    className="align-middle"
                >

                    <TableHeader
                        columns={columns}
                        filters={filters}
                        sortConfig={sortConfig}
                        onSort={handleSort}
                        onFilter={handleFilter}
                    />

                    <tbody>

                        {currentData.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={columns.length}
                                    className="text-center py-5"
                                >
                                    Data tidak ditemukan
                                </td>

                            </tr>

                        ) : (

                            currentData.map(row => (

                                <tr key={row.id}>

                                    {columns.map(column => (

                                        <td key={column.key}>

                                            {column.render
                                                ? column.render(
                                                    row
                                                )
                                                : row[column.key]
                                            }

                                        </td>

                                    ))}

                                </tr>

                            ))

                        )}

                    </tbody>

                </Table>

            </div>


            <TablePagination

                currentPage={currentPage}
                totalPages={totalPages}
                totalData={sortedData.length}
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
            />

        </div>

    );


    /* penggunaan sementara render action untuk belajar confirmdialog */
    const renderActions = (supplier) => {
        return (
            <div className="d-flex gap-2">

                <AppButton
                    variant="warning"
                    size="sm"
                >
                    Edit
                </AppButton>

                <AppButton
                    variant="danger"
                    size="sm"
                    onClick={() =>
                        handleDeleteClick(supplier)
                    }
                >
                    Delete
                </AppButton>

            </div>
        );
    };
    
};

export default DataTable;