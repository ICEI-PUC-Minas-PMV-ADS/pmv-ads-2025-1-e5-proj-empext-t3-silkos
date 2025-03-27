import StyleEsqueceuSenhaPage from "./EsqueceuSenhaPage.module.css";

export default function EsqueceuSenhaPage() {
    return (
        <div className={StyleEsqueceuSenhaPage.body}>
                <div className={StyleEsqueceuSenhaPage.titleEsqueceuSenha}>
                    <p>Esqueceu a senha</p>
                </div>
            <div className={StyleEsqueceuSenhaPage.container}>
                <div className={StyleEsqueceuSenhaPage.formEsqueceuSenha}>
                    <input name="email" id="email" type="email" placeholder="Email"/>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    );
}
