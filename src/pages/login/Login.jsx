import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";
import SimpleCard from "../../components/cards/SimpleCard/SimpleCard";
import TextInput from "../../components/inputs/TextInput/TextInput";
import "./Login.scss";
import { useState } from "react";

function Login() {

    /* ~~~~ VARIABLES ~~~~ */

    const [form, setForm] = useState({ email: "", password: "" });


    /* ~~~~ SCRIPTS ~~~~ */

    function onKeyUp(event, fieldName) {
        form[fieldName] = event.target.value;
        setForm(form);
    }
    

    /* ~~~~ REACT ELEMENT ~~~~ */

    return (
        <div className="container dflex justify-center align-center h-100" >
            <SimpleCard w="300px">
                <h1>Login</h1>
                <div className="input-holder">
                    <TextInput h="28px" w="80%" placeholder="Email" fieldName="email" onKeyUp={onKeyUp} />
                </div>
                <div className="input-holder">
                    <PasswordInput h="30px" w="80%" placeholder="Password" fieldName="password" onKeyUp={onKeyUp} />
                </div>
            </SimpleCard>
        </div>
    );
}

export default Login;