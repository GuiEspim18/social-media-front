import "./TextInput.scss";

function TextInput(props) {

    /* ~~~~ VARIABLES ~~~~ */

    const width = props.w;
    const height = props.h;
    const placeholder = props.placeholder;
    const onKeyUp = props.onKeyUp ? props.onKeyUp : function (p1, p2) { return false };
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