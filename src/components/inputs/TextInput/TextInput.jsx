import "./TextInput.scss";

function TextInput(props) {
    const width = props.w;
    const height = props.h;
    const placeholder = props.placeholder;

    const styles = { width, height };

    return (
        <input type="text" className="input" style={styles} placeholder={placeholder} />
    );
}

export default TextInput;