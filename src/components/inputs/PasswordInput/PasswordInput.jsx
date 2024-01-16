import { useState } from "react";
import IconButton from "../../buttons/IconButton/IconButton";
import "./PasswordInput.scss";

function PasswordInput(props) {

    /* ~~~~ VARIABLES ~~~~ */

    const width = props.w;
    const height = props.h;
    const placeholder = props.placeholder;
    const onKeyUp = props.onKeyUp ? props.onKeyUp : function (p1, p2) { return false };
    const fieldName = props.fieldName;

    const styles = { height, width };

    const [mode, setMode] = useState(true);
    const [icon, setIcon] = useState("visibility_off");
    const [type, setType] = useState("password");
 

    /* ~~~~ SCRIPTS ~~~~ */

    // change password input mode to text or password
    function changeMode() {
        setMode(!mode);
        if (mode) {
            setIcon("visibility");
            setType("text");
        } else {
            setIcon("visibility_off");
            setType("password");
        } 
    }

    function onKeyUpEvent(event) {
        onKeyUp(event, fieldName);
    }


    /* ~~~~ REACT ELEMENT ~~~~ */

    return (
        <div className="input password-input" style={styles}>
            <input type={type} placeholder={placeholder} onKeyUp={onKeyUpEvent} />
            <IconButton w="30px" h="30px" icon={icon} color="#767676" onClick={changeMode} />
        </div>
    );
}

export default PasswordInput;