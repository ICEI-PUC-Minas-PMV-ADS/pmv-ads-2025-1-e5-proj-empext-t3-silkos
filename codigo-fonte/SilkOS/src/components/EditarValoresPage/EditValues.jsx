import { useState, useEffect } from "react";
import "./valor.css";
import { useNavigate } from "react-router-dom";

const EditValues = ({ values, setValues }) => {
  const navigate = useNavigate();

    const name = sessionStorage.getItem("name");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (name == null || name == undefined || name == "") {
                alert("Você precisa estar autenticado para acessar essa página!");
                navigate("/Login");
            }
        }, 1);

        return () => {
            clearTimeout(timer);
        };
    }, [name, navigate]);

    const [formValues, setFormValues] = useState(values);

    const handleSubmit = e => {
        e.preventDefault();
        setValues(formValues);
        alert("Valores atualizados com sucesso!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Valores</h2>
            {Object.keys(formValues).map(key => (
                <label key={key}>
                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}:
                    <input
                        type="number"
                        value={formValues[key]}
                        onChange={e =>
                            setFormValues(prev => ({
                                ...prev,
                                [key]: parseFloat(e.target.value)
                            }))
                        }
                    />
                </label>
            ))}
            <button type="submit">Salvar</button>
        </form>
    );
};

export default EditValues;
