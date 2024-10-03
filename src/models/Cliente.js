import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.type.ObjectId},
    nome: {type: String, require: true},
    cpf: {type: Number},
    endereco: {type: String} 
});

const cliente = model("clientes", clienteSchema);

export default cliente;