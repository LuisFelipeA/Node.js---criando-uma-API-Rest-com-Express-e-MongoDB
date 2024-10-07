import ErroBase from "./erroBase.js";

class RequisicaoIncorreta extends ErroBase {
    constructor(mensage = "Um ou mais dados fornecidos estão incorretos"){
        super(mensage, 400);
    }
}

export default RequisicaoIncorreta;