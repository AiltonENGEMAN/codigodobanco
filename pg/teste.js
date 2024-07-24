const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do cliente PostgreSQL
const client = new Client({
  user: 'postgres',
  host: '26.129.170.253', // Altere para o seu host
  password: 'math123)', // Altere para sua senha
  database: 'Cadastro Colaboradores',
  port: 5432,
});

// Conectar ao banco de dados
client.connect()
  .then(() => console.log('Conexão com PostgreSQL estabelecida'))
  .catch(err => console.error('Erro ao conectar ao PostgreSQL', err));

// Endpoint para receber os dados do formulário
app.post('/api/salvarDadosFormulario', async (req, res) => {
  const { novoLote1 } = req.body;

  try {
    // Alterar sobre os dados recebidos e inserir no banco de dados
    for (const idPrefix in novoLote1.values) {
      const { inicio, fim, validade } = novoLote1.values[idPrefix];
      const query = `
        INSERT INTO cadastro_temporario (id_prefix, inicio, fim, validade)
        VALUES ($1, $2, $3, $4)
      `;
      await client.query(query, [idPrefix, inicio, fim, validade]);
    }
    
    res.status(200).json({ message: 'Dados salvos com sucesso' });
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).json({ error: 'Erro ao salvar dados' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/salvarDadosFormulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ novoLote1: { values, files } }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao salvar os dados');
      }
  
      console.log('Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };
  
  