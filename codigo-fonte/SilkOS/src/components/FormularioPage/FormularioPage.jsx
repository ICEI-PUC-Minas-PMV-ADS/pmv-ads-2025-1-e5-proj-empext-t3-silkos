// Frontend - src/components/FormularioPage/FormularioPage.jsx
import React, { useState } from 'react';
import styles from './FormularioPage.module.css';
import axios from 'axios';

const servico1Options = ['Vetor Simples', 'Vetor Mediano', 'Vetor Complexo'];
const servico2Options = ['Layout', 'Separação de cor'];

export default function FormularioPage() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [servico1, setServico1] = useState('');
  const [servico2, setServico2] = useState('');
  const [quantidadeCor, setQuantidadeCor] = useState(0);
  const [quantidadePeca, setQuantidadePeca] = useState(0);
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);

  const calcularValor = () => {
    const valor = quantidadeCor * 2 * quantidadePeca;
    return valor;
  };

  const handleSalvar = async () => {
    try {
      const valorTotal = calcularValor();
      await axios.post('http://localhost:3000/formulario', {
        nomeCliente,
        servico1,
        servico2,
        quantidadeCor,
        quantidadePeca,
        data,
        valorTotal
      });
      alert('Salvo com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar');
    }
  };

  return (
    <div className={styles.container}>
      <h2>SilkOS - Formulário</h2>

      <input type="text" placeholder="Nome Cliente" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />

      <h3>Artes</h3>
        <div className={styles.artesContainer}>
        <select value={servico1} onChange={(e) => setServico1(e.target.value)} className={styles.selectMetade}>
          <option value="">Selecionar Serviço 1</option>
          {servico1Options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>

        <select value={servico2} onChange={(e) => setServico2(e.target.value)} className={styles.selectMetade}>
         <option value="">Selecionar Serviço 2</option>
          {servico2Options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>


      <h3>Serviços de Silk</h3>
      <input type="number" placeholder="Quantidade de cor" value={quantidadeCor} onChange={(e) => setQuantidadeCor(Number(e.target.value))} />
      <input type="number" placeholder="Quantidade de peças" value={quantidadePeca} onChange={(e) => setQuantidadePeca(Number(e.target.value))} />
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} />

      <p><strong>Valor estimado:</strong> R$ {calcularValor().toFixed(2)}</p>

      <button onClick={handleSalvar}>Salvar</button>
    </div>
  );
}
