import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";
import { editora } from "../models/Editora.js";

class LivroController {
    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao listar`});
        }
    }

    static async listarLivrosPorId (req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao listar por id`});
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const editoraEncontrada = await editora.findById(novoLivro.editora);
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc}, editora: {...editoraEncontrada._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Livro Cadastrado", livro: livroCriado });
        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar`});
        }
    }

    static async atualizarLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const editoraEncontrada = await editora.findById(novoLivro.editora);
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc}, editora: {...editoraEncontrada._doc}};
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, livroCompleto);
            res.status(200).json({message: "Livro Atualizado"});
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao atualizar`});
        }
    }

    static async deletarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro Deletado"});
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar`});
        }
    }    

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const LivrosPorEditora =  await livro.find({editora: editora});
            res.status(200).json(LivrosPorEditora);
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar`});
        }
    }

};

export default LivroController;