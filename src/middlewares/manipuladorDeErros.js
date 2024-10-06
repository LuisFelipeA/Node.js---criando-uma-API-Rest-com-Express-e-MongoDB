import mongoose from "mongoose";

function manipuladorDeErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).json({message: "Dados fornecidos incorretos"});
    }
    else {
        res.status(500).json({message: "Erro interno de servidor"});
    }
}

export default manipuladorDeErros;