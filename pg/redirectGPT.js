// Importar módulo pg
const { Client } = require('pg');

// Função assíncrona para consultar dados
async function consultarDados() {
  const client = new Client({
    user: 'postgres',
    host: '26.129.170.253',
    password: 'math123)',
    database: 'Cadastro Colaboradores',
    port: 5432,
  });

  try {
    await client.connect(); // Conectar ao banco de dados
    const resultado = await client.query('select * from cadastro_temporario'); // Executar consulta SQL
    console.log(resultado.rows); // Exibir resultados no console
  } catch (error) {
    console.error('Erro ao consultar dados:', error);
  } finally {
    await client.end(); // Fechar conexão com o banco de dados
  }
}

// Chamar a função para executar a consulta
consultarDados();

try {
    // código com await
  } catch (error) {
    console.error('Erro:', error);
  }
  