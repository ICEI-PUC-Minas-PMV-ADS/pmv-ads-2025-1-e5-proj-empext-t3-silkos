import StyleNovaSenhaPage from "./NovaSenhaPage.module.css";

export default function NovaSenhaPage() {
    return (
        <div className={StyleNovaSenhaPage.body}>
                <div className={StyleNovaSenhaPage.titleLogin}>
                    <p>Nova Senha</p>
                </div>
            <div className={StyleNovaSenhaPage.container}>
                <div className={StyleNovaSenhaPage.formLogin}>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Senha"
                    />
                    <input
                        name="password"
                        id="password2"
                        type="password"
                        placeholder="Senha novamente"
                    />
                    <button>Enviar</button>
                </div>
            </div>   
        </div>
    )
}