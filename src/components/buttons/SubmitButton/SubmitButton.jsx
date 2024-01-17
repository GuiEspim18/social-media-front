import { voidFunction } from "../../../utils/voidFunction/voidFunction";
import "./SubmitButton.scss";

function SubmitButton(props) {

    /* ~~~~ VARIABLES ~~~~ */

    const height = props.h;
    const width = props.w;
    const text = props.text;
    const onClick = props.onClick ? props.onClick : voidFunction;

    const styles = { height, width };


    /* ~~~~ REACT ELEMENT ~~~~ */

    return (
        <button className="button submit-button" style={styles} onClick={onClick}>
            <p>{text}</p>
        </button>
    );
}

export default SubmitButton;