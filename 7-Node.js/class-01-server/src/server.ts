import express from "express";
// Importa express da pasta express

// Declara app como funcao de callback
const app = express();
// Incrementa 3000 á port
const port = 3000;

//? .listen  o que é?
//* ouve as requisições
// server.listen(port, hostname, backlog, callback)
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}...`)
}); 

app.route("/").get((request, response) => {
    response.send({className: "Class 01 Server"})
})
