import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import styles from './OrcamentosPage.module.css';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

export default function OrcamentosPage() {
  const [orcamentos, setOrcamentos] = useState([]);

  const carregarOrcamentos = async () => {
    try {
      const res = await axios.get('http://localhost:3000/servicos');
      setOrcamentos(res.data);
    } catch (err) {
      console.error('Erro ao buscar orçamentos:', err);
    }
  };

  useEffect(() => {
    carregarOrcamentos();
  }, []);

  const gerarPDF = (orcamento) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Orçamento', 105, 10, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Cliente: ${orcamento.cliente}`, 20, 30);
    doc.text(`Serviço 1: ${orcamento.servico1}`, 20, 40);
    if (orcamento.servico2) doc.text(`Serviço 2: ${orcamento.servico2}`, 20, 50);
    doc.text(`Qtd Cores: ${orcamento.quantidadeCor}`, 20, 60);
    doc.text(`Qtd Peças: ${orcamento.quantidadePeca}`, 20, 70);
    doc.text(`Data: ${new Date(orcamento.data).toLocaleDateString()}`, 20, 80);

    doc.setFontSize(14);
    doc.text(`Valor Total: R$ ${orcamento.valor.toFixed(2)}`, 20, 100);

    doc.save(`orcamento-${orcamento.cliente}.pdf`);
  };

  const excluirOrcamento = async (id) => {
    const confirmar = window.confirm('Tem certeza que deseja excluir este orçamento?');
    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3000/servicos/${id}`);
      await carregarOrcamentos();
    } catch (err) {
      console.error('Erro ao excluir orçamento:', err);
      alert('Erro ao excluir orçamento!');
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h2>Orçamentos</h2>
      <div className={styles.lista}>
        {orcamentos.map((orcamento) => (
          <div key={orcamento.id || orcamento._id} className={styles.item}>
            <div>
              <strong>{orcamento.cliente}</strong> - {orcamento.servico1}
              {orcamento.servico2 && ` + ${orcamento.servico2}`}
              <br />
              R$ {orcamento.valor.toFixed(2)} - {new Date(orcamento.data).toLocaleDateString()}
            </div>
            <div className={styles.botoes}>
              <button onClick={() => gerarPDF(orcamento)}>Gerar PDF</button>
              <button onClick={() => excluirOrcamento(orcamento.id || orcamento._id)} style={{ backgroundColor: '#d9534f', color: '#fff', marginLeft: '10px' }}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
