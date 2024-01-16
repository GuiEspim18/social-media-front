import SimpleCard from "../../components/cards/SimpleCard/SimpleCard";
import "./Login.scss";

function Login() {
    return (
        <div className="container dflex justify-center align-center h-100" >
            <SimpleCard w="300px">
                <h1>Login</h1>
            </SimpleCard>
        </div>
    );
}

export default Login;