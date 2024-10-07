import mongoose from "mongoose";

const EditoraSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: [true, "O nome da editora é obrigatório"]},
    pais: {type: String}
}, {versionKey: false});

const editora = mongoose.model("editoras", EditoraSchema);

export {editora, EditoraSchema};