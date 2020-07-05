const express = require("express")
const server = express()

// pegar do banco de dados
const db = require("./database/db")

// Configurar pasta publica
server.use(express.static("public"))


// Habilitar o uso do req.body na aplicaçao
server.use(express.urlencoded({ extended: true }))


// ultilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicação
// pagina princial - home
// req = requisição
// res = resposta

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo" })
})

server.get("/create-point", (req, res) => {

    // req.query = Query strings da url
    // console.log(req.query)

    return res.render("create-point.html")
})
server.post("/savepoint", (req, res) => {

    // req.body: é o mesmo que o corpo do formulario
    // console.log(req.body)

    // inserir dados no banco de dados

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?)

    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {
    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        // mostrar a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total })
    })
})

// Ligar servidor
server.listen(3000)