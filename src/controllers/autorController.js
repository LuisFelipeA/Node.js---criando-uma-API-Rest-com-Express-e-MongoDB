import {autor} from "../models/Autor.js";

class AutorController {
    static async listarAutores (req, res, next) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }
        catch (erro) {
            next(erro); // Envia o erro para app.js -> app.use((erro, req, res, next) ...
        }
    }

    static async listarAutoresPorId (req, res, next) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if (autorEncontrado !== null) {
                res.status(200).json(autorEncontrado);
            }
            else {
                res.status(404).json({message: "Autor não encontrado"})
            }
        }
        catch (erro) {
            next(erro);
        }
    }

    static async cadastrarAutor(req, res, next) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Autor Cadastrado", autor: novoAutor });

        }
        catch(erro){
            next(erro);
        }
    }

    static async atualizarAutor (req, res, next) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor Atualizado"});
        }
        catch (erro) {
            next(erro);
        }
    }

    static async deletarAutor (req, res, next) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor Deletado"});
        }
        catch (erro) {
            next(erro);
        }
    }    

};

export default AutorController;