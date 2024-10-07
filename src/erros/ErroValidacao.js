import RequisicaoIncorreta from "./requisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro){
        const mensagensErro = Object.values(erro.errors).map(erro => erro.message).join("; ");   
        super(`Os seguintes erros foram encontrados: ${mensagensErro}`)
    }
}

export default ErroValidacao;

//Object.values(erro.errors) retorna um array contendo os valores desses erros     
//map() percorre o array de erros e, para cada erro, acessa sua propriedade message (onde a mensagem de erro está armazenada)
//join("; ") pega o array de mensagens de erro e as concatena em uma única string, onde cada mensagem é separada por um ponto e vírgula