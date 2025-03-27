import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../Backend/api";
import StyleCadastrarPage from "./CadastrarPage.module.css";

export default function CadastrarPage() {

    const navigate = useNavigate();

    const initialState = {
        email: "",
        email2: "",
        password: "",
        password2: "",
        text: "",
    };

    function Reducer(state, action) {
        switch (action.type) {
            case "SET_FIELD":
                return { ...state, [action.field]: action.value };
            case "RESET":
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    async function HandleChangeState(field, value) {
        dispatch({
            type: "SET_FIELD",
            field,
            value,
        });
    };

    async function getUsers() {
        try {
            const response = await api.get(`/Users/`, {
                params: {
                    email: state.email,
                },
            });

            return response;

        } catch (error) {
            if (error.response && error.response.status === 404) {
                return error.response;
            }
        };
    };

    async function postUsers() {
        await api.post("/Users/", {
            email: state.email,
            password: state.password,
        });
    };

    async function HandleCadastro() {

        if (state.email !== state.email2) {
            dispatch("text", "O campo email devem ser igual ");
        } else if (state.password !== state.passwor2) {
            dispatch("text", "O campo senha deve ser igual");
        }

        const response = getUsers();

        if (response.status !== 200) {
            postUsers();
            navigate("/Login");
        } else {
            dispatch("text", "Erro no servidor, por favor tente mais tarde!");
        }
        
    }

    return (
        <div>
            <div className={StyleCadastrarPage.body}>
                <div className={StyleCadastrarPage.titleCadastrar}>
                    <p>Cadastrar</p>
                </div>
                <div className={StyleCadastrarPage.container}>
                    <div className={StyleCadastrarPage.formCadastrar}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={state.value}
                            onChange={(e) =>
                                HandleChangeState("email", e.target.value)
                            }
                        />
                        <input
                            type="email"
                            placeholder="Email novamente"
                            value={state.value}
                            onChange={(e) =>
                                HandleChangeState("email2", e.target.value)
                            }
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={(e) =>
                                HandleChangeState("password", e.target.value)
                            }
                        />
                        <input
                            type="password"
                            placeholder="Senha Novamente"
                            onChange={(e) =>
                                HandleChangeState("password2", e.target.value)
                            }
                        />
                        <p>{state.text}</p>
                        <button onClick={HandleCadastro}>SALVAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
