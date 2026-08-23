import Button from "react-bootstrap/Button";

const AppButton = ({
    children,
    variant = "primary",
    size,
    type = "button",
    onClick,
    disabled = false
}) => {

    return (
        <Button
            variant={variant}
            size={size}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default AppButton;