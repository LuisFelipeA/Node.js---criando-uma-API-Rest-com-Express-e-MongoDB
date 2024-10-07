import NaoEncontrado from "../erros/NaoEncontrado.js";
import { editora } from "../models/Editora.js";

class EditoraController{
    static async listarEditoras (req, res, next) {
        try{
            const listaEditoras = await editora.find({});
            res.status(200).json(listaEditoras);
        }
        catch (erro) {
            next(erro); // Envia o erro para app.js -> app.use((erro, req, res, next) ...
        }
    }

    static async listarEditoraPorId (req, res, next) {
        try{
            const id = req.params.id;
            const editoraEncontrada = await editora.findById(id);
            if (editoraEncontrada !== null) {
                res.status(200).json(editoraEncontrada);
            }
            else {
                next(new NaoEncontrado("Editora não encontrada"));
            }
        }
        catch (erro) {
            next(erro);
        }
    }

    static async cadastrarEditora(req, res, next) {
        try {
            const novaEditora = await editora.create(req.body);
            res.status(201).json({message: "Editora Cadastrada", editora: novaEditora });

        }
        catch(erro){
            next(erro);
        }
    }

    static async atualizarEditora (req, res, next) {
        try{
            const id = req.params.id;
            await editora.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Editora Atualizada"});
        }
        catch (erro) {
            next(erro);
        }
    }

    static async deletarEditora (req, res, next) {
        try{
            const id = req.params.id;
            await editora.findByIdAndDelete(id);
            res.status(200).json({message: "Editora Deletada"});
        }
        catch (erro) {
            next(erro);
        }
    } 
}

export default EditoraController;