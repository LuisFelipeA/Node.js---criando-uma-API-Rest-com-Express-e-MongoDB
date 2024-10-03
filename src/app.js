import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao =  await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.log("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conectado ao Banco");
});

const app = express(); // coloca todas as funções de express dentro de app
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Olá Express");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) =>{
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) =>{
    livros.push(req.body);
    res.status(201).send("Livro inserido");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado");
});


export default app;