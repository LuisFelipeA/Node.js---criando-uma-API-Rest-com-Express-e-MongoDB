import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/Autores", autorController.listarAutores);

routes.get("/Autores/:id", autorController.listarAutoresPorId);

routes.post("/Autores", autorController.cadastrarAutor);

routes.put("/Autores/:id", autorController.atualizarAutor);

routes.delete("/Autores/:id", autorController.deletarAutor);

export default routes;