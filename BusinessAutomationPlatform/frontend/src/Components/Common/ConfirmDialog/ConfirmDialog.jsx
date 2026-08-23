import AppModal from "../Modal/modal";
import AppButton from "../Button/ButtonSave";

const ConfirmDialog = ({
    show,
    onCancel,
    onConfirm,
    title = "Konfirmasi",
    message = "Apakah Anda yakin ..?"
}) =>{

    return (
        <AppModal
            show={show}
            onHide={onCancel}
            title={title}
        >
            <p>{message}</p>
            <div className="d-flex justify-content-end gap-2">
                <AppButton
                    variant="secondary"
                    onClick={onCancel}
                >
                    Batal
                </AppButton>
                <AppButton
                    variant="danger"
                    onClick={onConfirm}
                >
                    Hapus
                </AppButton>
            </div>
        </AppModal>
    )
}

export default ConfirmDialog;