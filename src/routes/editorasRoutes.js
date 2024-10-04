import express from "express";
import editoraController from "../controllers/editoraController.js";

const routes = express.Router();

routes.get("/Editoras", editoraController.listarEditoras);

routes.get("/Editoras/:id", editoraController.listarEditoraPorId);

routes.post("/Editoras", editoraController.cadastrarEditora);

routes.put("/Editoras/:id", editoraController.atualizarEditora);

routes.delete("/Editoras/:id", editoraController.deletarEditora);

export default routes;