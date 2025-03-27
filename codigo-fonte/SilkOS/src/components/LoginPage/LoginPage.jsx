import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../Backend/api";
import StyleLoginPage from "./LoginPage.module.css";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");

    async function getUsers() {
        try {
            const response = await api.get(`/Users`, {
                params: {
                    email: email,
                },
            });

            return response;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return error.response;
            }
        }
    }

    async function HandleLogin() {
        if (email == "") {
            setText("Preencha o campo EMAIL!");
        } else if (password == "") {
            setText("Preencha o campo SENHA!");
        }

        const response = await getUsers();

        if (response && response.status === 200) {
            console.log("Usuario autenticado!")
        } else if (response && response.status === 404) {
            setText("Usuário não encontrado!");
        } else {
            setText("Erro no servidor, por favor tente mais tarde!");
        }
    }

    return (
        <div className={StyleLoginPage.body}>
            <div className={StyleLoginPage.titleLogin}>
                <p>Login</p>
            </div>
            <div className={StyleLoginPage.container}>
                <div className={StyleLoginPage.formLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={StyleLoginPage.options}>
                    <Link to="/Cadastro">Cadastrar</Link>
                    <Link to="/EsqueceuSenha">Esqueceu a senha</Link>
                </div>
                <p>{text}</p>
                <button onClick={HandleLogin}>Entrar</button>
            </div>
        </div>
    );
}
