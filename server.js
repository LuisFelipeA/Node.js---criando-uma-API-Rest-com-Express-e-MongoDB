import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js 2",
    "/rota1": "Rota 1",
    "/rota2": "Rota 2"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-Type": "text/plain"});
    res.end(rotas[req.url]);
})

server.listen(PORT, () => {
    console.log("Servidor rodando")
} )