import { useState } from "react";
import StyleEsqueceuSenhaPage from "./EsqueceuSenhaPage.module.css";

export default function EsqueceuSenhaPage() {

    const [email, setEmail] = useState("");

    async function SendRecPassword() {
        await fetch("http://localhost:300/Users/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                to: `${email}`,
            })
        });
    };

    return (
        <div className={StyleEsqueceuSenhaPage.body}>
            <div className={StyleEsqueceuSenhaPage.titleEsqueceuSenha}>
                <p>Esqueceu a senha</p>
            </div>
            <div className={StyleEsqueceuSenhaPage.container}>
                <div className={StyleEsqueceuSenhaPage.formEsqueceuSenha}>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value )}
                    />
                    <button onClick={() => SendRecPassword()}>Enviar</button>
                </div>
            </div>
        </div>
    );
}
