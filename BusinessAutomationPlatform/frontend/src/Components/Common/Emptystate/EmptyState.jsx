// Ini digunakan ketika tabel tidak memiliki data.
const EmptyState =({
    title = " Data tidak ada atau tidak di temukan",
    description=" Hubungu Support !!",
    children
})=>{
    return (
        <div className="text-center py-5">
            <div style={{ 
                fontSize :"40px"
             }}>
                📦
            </div>
            <h5>{title}</h5>
            {description && (
                <p className="text-muted">
                    {description}
                </p>
            )}
            { children }
        </div>
    )
}

export default EmptyState;