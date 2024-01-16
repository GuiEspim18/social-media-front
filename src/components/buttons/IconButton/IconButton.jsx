import "./IconButton.scss";

function IconButton(props) {

    /* ~~~~ VARIABLES ~~~~ */

    const height = props.h;
    const width = props.w;
    const icon = props.icon;
    const borderRadius = props.bRadius ? props.bRadius : props.h;
    const backgroundColor = props.bgColor;
    const color = props.color;
    const onClick = props.onClick;

    const styles = { height, width, borderRadius, backgroundColor };
    const spanStyles = { color };


    /* ~~~~ REACT ELEMENT ~~~~ */

    return (
        <button className="icon-button" style={styles} onClick={onClick}>
            <span className="material-symbols-rounded" style={spanStyles}>
                {icon}
            </span>
        </button>
    )
}

export default IconButton;