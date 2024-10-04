import livro from "../models/Livro.js";

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
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Livro Cadastrado", livro: novoLivro });

        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar`});
        }
    }

    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
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

};

export default LivroController;