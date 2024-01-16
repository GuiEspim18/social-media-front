import "./IconButton.scss";

function IconButton(props) {
    const height = props.h;
    const width = props.w;
    const icon = props.icon;
    const borderRadius = props.bRadius;
    const backgroundColor = props.bgColor;

    const styles = { height, width, borderRadius, backgroundColor };

    return (
        <button className="icon-button" style={styles}>
            <span className="material-symbols-rounded">
                {icon}
            </span>
        </button>
    )
}

export default IconButton;