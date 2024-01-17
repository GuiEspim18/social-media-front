import { voidFunction } from "../../../utils/voidFunction/voidFunction";
import "./TextInput.scss";

function TextInput(props) {

    /* ~~~~ VARIABLES ~~~~ */

    const width = props.w;
    const height = props.h;
    const placeholder = props.placeholder;
    const onKeyUp = props.onKeyUp ? props.onKeyUp : voidFunction;
    const fieldName = props.fieldName;

    const styles = { width, height };


    /* ~~~~ SCRIPTS ~~~~ */

    function onKeyUpEvent(event) {
        onKeyUp(event, fieldName);
    }


    /* ~~~~ REACT ELEMENT ~~~~ */

    return (
        <input type="text" className="input" style={styles} placeholder={placeholder} onKeyUp={onKeyUpEvent} />
    );
}

export default TextInput;