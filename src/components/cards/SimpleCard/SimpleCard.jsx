import "./SimpleCard.scss";

function SimpleCard(props) {

    /* ~~~~ VARIABLES ~~~~ */

    const backgroundColor = props.bgColor;
    const children = props.children;
    const width = props.w;

    const styles = { backgroundColor, width };


    /* ~~~~ REACT ELEMENT ~~~~ */

    return (
        <div className="card simple-card" style={styles}>
            {children}
        </div>
    );
}

export default SimpleCard;