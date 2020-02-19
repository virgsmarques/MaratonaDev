//configurar o servidorclear
const express = require("express")
const server = express()


//configurar o servidor para apresentar arquivos estaticos
server.use(express.static('public'))

// habilitar body do form 
server.use(express.urlencoded({ extended: true}))

// configurando a templame engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true, //apenas verdadeiro ou falso
})

// LISTA DE DOADORES : VETOR || ARRAY
const donors = [
    {
        name: "Virgínia Maria",
        blood: "A+"
    },
    {
        name: "Terezinha Bezerra",
        blood: "O+"
    },
    {
        name: "Delcimar Bezerra",
        blood: "A-"
    },
    {
        name: "Emerson Freitas",
        blood: "O-"
    },
]

//configurar a apresentação 
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

server.post("/", function(req, res) {
    //Pegar dados do formulário.
    const name = req.body.name
    const email = req.body.email 
    const blood = req.body.blood 

    // coloco valores na array
    donors.push({
        name:  name, 
        blood: blood
    })

    return res.redirect("/")
})

//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){
    console.log("iniciei o servidor...")
})
