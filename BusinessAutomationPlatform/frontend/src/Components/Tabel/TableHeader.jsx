import Form from "react-bootstrap/Form";

const TableHeader = ({
    columns,
    filters,
    sortConfig,
    onSort,
    onFilter
}) => {

    return (

        <thead>

            <tr>

                {columns.map(column => (

                    <th key={column.key}>

                        <div
                            className="table-header-title"
                            onClick={() =>
                                column.sortable &&
                                onSort(column.key)
                            }
                        >

                            {column.label}

                            {column.sortable && (
                                <span className="sort-icon">

                                    {sortConfig.key === column.key
                                        ? (
                                            sortConfig.direction === "asc"
                                                ? " ↑"
                                                : " ↓"
                                        )
                                        : " ↕"
                                    }

                                </span>
                            )}

                        </div>


                        {column.filterable && (

                            <Form.Control
                                size="sm"
                                placeholder={`Filter ${column.label}`}
                                value={
                                    filters[column.key] || ""
                                }
                                onChange={(e) =>
                                    onFilter(
                                        column.key,
                                        e.target.value
                                    )
                                }
                            />

                        )}

                    </th>

                ))}

            </tr>

        </thead>

    );
};

export default TableHeader;