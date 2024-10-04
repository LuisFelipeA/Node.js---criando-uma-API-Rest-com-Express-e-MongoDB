import { editora } from "../models/Editora.js";

class EditoraController{
    static async listarEditoras (req, res) {
        try{
            const listaEditoras = await editora.find({});
            res.status(200).json(listaEditoras);
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao listar`});
        }
    }

    static async listarEditoraPorId (req, res) {
        try{
            const id = req.params.id;
            const editoraEncontrada = await editora.findById(id);
            res.status(200).json(editoraEncontrada);
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao listar por id`});
        }
    }

    static async cadastrarEditora(req, res) {
        try {
            const novaEditora = await editora.create(req.body);
            res.status(201).json({message: "Editora Cadastrada", editora: novaEditora });

        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar`});
        }
    }

    static async atualizarEditora (req, res) {
        try{
            const id = req.params.id;
            await editora.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Editora Atualizada"});
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao atualizar`});
        }
    }

    static async deletarEditora (req, res) {
        try{
            const id = req.params.id;
            await editora.findByIdAndDelete(id);
            res.status(200).json({message: "Editora Deletada"});
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar`});
        }
    } 
}

export default EditoraController;