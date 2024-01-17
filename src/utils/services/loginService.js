import { url } from "../apiUrl/apiUrl";

export class LoginService {

    API_KEY = `${url}/auth/login`;

    async post(form) {
        return await fetch(this.API_KEY, {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
    }

}