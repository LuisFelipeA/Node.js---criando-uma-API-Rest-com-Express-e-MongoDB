import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao =  await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.log("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conectado ao Banco");
});

const app = express(); // coloca todas as funções de express dentro de app
routes(app);

app.use(manipulador404);

// Trata o erro recebido -> next(erro);
app.use(manipuladorDeErros);

export default app;