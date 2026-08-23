import Pagination from "react-bootstrap/Pagination";

const TablePagination = ({
    currentPage,
    totalPages,
    totalData,
    rowsPerPage,
    onPageChange
}) => {

    const start =
        totalData === 0
            ? 0
            : (currentPage - 1) * rowsPerPage + 1;

    const end =
        Math.min(
            currentPage * rowsPerPage,
            totalData
        );

    return (

        <div className="
            d-flex
            justify-content-between
            align-items-center
            mt-3
        ">

            <div className="text-muted">

                Showing {start} to {end}
                {" "}of{" "}
                {totalData}

            </div>


            <Pagination>

                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() =>
                        onPageChange(
                            currentPage - 1
                        )
                    }
                />


                {[...Array(totalPages)].map(
                    (_, index) => {

                        const page =
                            index + 1;

                        return (

                            <Pagination.Item
                                key={page}
                                active={
                                    page === currentPage
                                }
                                onClick={() =>
                                    onPageChange(page)
                                }
                            >
                                {page}
                            </Pagination.Item>

                        );

                    }
                )}


                <Pagination.Next
                    disabled={
                        currentPage === totalPages
                    }
                    onClick={() =>
                        onPageChange(
                            currentPage + 1
                        )
                    }
                />

            </Pagination>

        </div>
    );
};

export default TablePagination;