import "./SimpleCard.scss";

function SimpleCard(props) {
    const backgroundColor = props.bgColor;
    const children = props.children;
    const width = props.w;

    const styles = { backgroundColor, width };

    return (
        <div className="card simple-card" style={styles}>
            {children}
        </div>
    );
}

export default SimpleCard;