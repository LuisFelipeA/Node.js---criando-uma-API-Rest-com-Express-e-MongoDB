import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";
import { editora } from "../models/Editora.js";

class LivroController {
    static async listarLivros (req, res, next) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }
        catch (erro) {
            next(erro); // Envia o erro para app.js -> app.use((erro, req, res, next) ...
        }
    }

    static async listarLivrosPorId (req, res, next) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            if (livroEncontrado !== null) {
                res.status(200).json(livroEncontrado);
            }
            else {
                res.status(404).json({message: "Livro não encontrado"})
            }
        }
        catch (erro) {
            next(erro);
        }
    }

    static async cadastrarLivro(req, res, next) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const editoraEncontrada = await editora.findById(novoLivro.editora);
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc}, editora: {...editoraEncontrada._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Livro Cadastrado", livro: livroCriado });
        }
        catch(erro){
            next(erro);
        }
    }

    static async atualizarLivro (req, res, next) {
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
            next(erro);
        }
    }

    static async deletarLivro (req, res, next) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro Deletado"});
        }
        catch (erro) {
            next(erro);
        }
    }    

    static async listarLivrosPorEditora (req, res, next) {
        const editora = req.query.editora;
        try {
            const LivrosPorEditora =  await livro.find({editora: editora});
            res.status(200).json(LivrosPorEditora);
        }
        catch (erro) {
            next(erro);
        }
    }

};

export default LivroController;