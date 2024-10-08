import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
import { EditoraSchema } from "./Editora.js";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: [true, "O titulo do livro é obrigatório"]},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number, min: [10, "O numero de pagina deve estar entre 10 e 5000"], max: [5000, "O numero de pagina deve estar entre 10 e 5000"]},
    autor: autorSchema,
    editora: EditoraSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;