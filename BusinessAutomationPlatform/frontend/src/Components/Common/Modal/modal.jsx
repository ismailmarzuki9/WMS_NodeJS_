import Modal from 'react-bootstrap/Modal';

// Modal digunakan untuk menampilkan sesuatu di atas halaman
// misal Tambah Supplier ,Edit Supplier,Detail Supplier,Konfirmasi Delete

const AppModal =({
    show,
    onHide,
    title,
    children,
    size ="md"
})=>{
    return (
        <Modal
            show={show}
            onHide={onHide}
            size={size}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );

};

export default AppModal;