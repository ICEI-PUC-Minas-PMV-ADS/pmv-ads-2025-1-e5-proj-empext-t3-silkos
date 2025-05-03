import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ClientePage.module.css';
import Navbar from '../Navbar/Navbar';

export default function ClientePage() {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    nome: '', email: '', celular: '',
    endereco1: '', numero1: '', endereco2: '', numero2: ''
  });
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const res = await axios.get('http://localhost:3000/clientes');
        setClientes(res.data);
      } catch (err) {
        console.error('Erro ao buscar clientes:', err);
      }
    }
    fetchClientes();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSalvar = async () => {
    const { nome, email, celular } = formData;

    if (!nome.trim() || !email.trim() || !celular.trim()) {
      alert("Por favor, preencha os campos obrigatórios: Nome, Email e Celular.");
      return;
    }

    try {
      if (editandoId) {
        const res = await axios.put(`http://localhost:3000/clientes/${editandoId}`, formData);
        setClientes(clientes.map(c => (c.id || c._id) === editandoId ? res.data : c));
        setEditandoId(null);
      } else {
        const res = await axios.post('http://localhost:3000/clientes', formData);
        setClientes([...clientes, res.data]);
      }

      setFormData({
        nome: '', email: '', celular: '',
        endereco1: '', numero1: '', endereco2: '', numero2: ''
      });
    } catch (err) {
      console.error('Erro ao salvar cliente:', err);
      alert("Erro ao salvar o cliente.");
    }
  };

  const handleEditar = (cliente) => {
    setFormData({ ...cliente });
    setEditandoId(cliente.id || cliente._id);
  };

  const handleExcluir = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/clientes/${id}`);
      setClientes(clientes.filter(c => (c.id || c._id) !== id));
    } catch (err) {
      console.error('Erro ao excluir cliente:', err);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h2>Cliente</h2>
      <div className={styles.formContainer}>
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        <div className={styles.row}>
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <input type="text" name="endereco1" placeholder="Endereço 1" value={formData.endereco1} onChange={handleChange} />
          <input type="text" name="numero1" placeholder="Número" value={formData.numero1} onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <input type="text" name="endereco2" placeholder="Endereço 2" value={formData.endereco2} onChange={handleChange} />
          <input type="text" name="numero2" placeholder="Número" value={formData.numero2} onChange={handleChange} />
        </div>

        <h3>Clientes Cadastrados</h3>
        <ul className={styles.lista}>
          {clientes.map((cliente) => (
            <li key={cliente.id || cliente._id} className={styles.item}>
              <span>{cliente.nome}</span>
              <div>
                <button className={styles.edit} onClick={() => handleEditar(cliente)}>Editar</button>
                <button className={styles.delete} onClick={() => handleExcluir(cliente.id || cliente._id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.button} onClick={handleSalvar}>
        {editandoId ? 'Atualizar' : 'Salvar'}
      </button>
    </div>
  );
}
