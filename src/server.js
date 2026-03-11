const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
  user: "postgres", // Substitua pelo seu usuário do PostgreSQL
  // user: 'postgre', // Substitua pelo seu usuário do PostgreSQL
  // user: 'senai', // Substitua pelo seu usuário do PostgreSQL
  host: "localhost",
  database: "trunfo-dino", // Nome da sua database
  // password: 'senai', // Substitua pela sua senha
  password: "senai", // Substitua pela sua senha
  port: 5433, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os DINO
app.get("/DINO", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM DINO");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao buscar DINO" });
  }
});

// Rota para buscar um DINO por CODIGO
app.get("/DINO/:codigo", async (req, res) => {
  const { codigo } = req.params;
  try {
    const result = await pool.query("SELECT * FROM DINO WHERE CODIGO = $1", [
      codigo,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "DINO não encontrado" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao buscar DINO" });
  }
});

// Rota para adicionar um DINO
app.post("/DINO", async (req, res) => {
  const {
    nome,
    altura,
    comprimento,
    peso,
    velocidade,
    agilidade,
    longevidade,
    numero_magico,
    imagem,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO DINO (NOME, ALTURA, COMPRIMENTO, PESO, VELOCIDADE, AGILIDADE, LONGEVIDADE, NUMERO_MAGICO, IMAGEM) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        nome,
        altura,
        comprimento,
        peso,
        velocidade,
        agilidade,
        longevidade,
        numero_magico,
        imagem,
      ],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao adicionar DINO" });
  }
});

// Rota para atualizar um DINO
app.put("/DINO/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const {
    nome,
    altura,
    comprimento,
    peso,
    velocidade,
    agilidade,
    longevidade,
    numero_magico,
    imagem,
  } = req.body;
  try {
    const result = await pool.query(
      "UPDATE DINO SET NOME = $1, ALTURA = $2, COMPRIMENTO = $3, PESO = $4, VELOCIDADE = $5, AGILIDADE = $6, LONGEVIDADE = $7, NUMERO_MAGICO = $8, IMAGEM = $9 WHERE CODIGO = $10 RETURNING *",
      [
        nome,
        altura,
        comprimento,
        peso,
        velocidade,
        agilidade,
        longevidade,
        numero_magico,
        imagem,
        codigo,
      ],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "DINO não encontrado" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao atualizar DINO" });
  }
});

// Rota para deletar um cliente
app.delete("/DINO/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM dino WHERE id = $1 RETURNING *",
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Dino não encontrado" });
    }
    res.json({ message: "Dino deletado com sucesso" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao deletar Dino" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
