import ErroBase from "./erroBase.js";

class NaoEncontrado extends ErroBase {
    constructor(mensage = "Pagina não encontrada"){
        super(mensage, 404);
    }
}

export default NaoEncontrado;