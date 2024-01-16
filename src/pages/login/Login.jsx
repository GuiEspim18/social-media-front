import SimpleCard from "../../components/cards/SimpleCard/SimpleCard";
import TextInput from "../../components/inputs/TextInput/TextInput";
import "./Login.scss";

function Login() {
    return (
        <div className="container dflex justify-center align-center h-100" >
            <SimpleCard w="300px">
                <h1>Login</h1>
                <div className="input-holder">
                    <TextInput h="28px" w="80%" placeholder="Email" />
                </div>
                <div className="input-holder">
                    <TextInput h="30px" w="80%" placeholder="Email" />
                </div>
            </SimpleCard>
        </div>
    );
}

export default Login;