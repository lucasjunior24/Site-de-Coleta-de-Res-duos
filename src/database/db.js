// inportar a dependecia do sqlite
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irar fazer opecações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// ultilizar o objeto de banco de dados para a nossa opecação
db.serialize(() => {

    // // 1 criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2 inserir dados na tebala
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?)

    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=874&q=80",
    //     "Papersider",
    //     "Guilherme Gamballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papeis e papelão"
    // ]
    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // // 3 consultar dados na tabela
    // db.all(`SELECT id, name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows) // para ver os registros
    // })
    // // 4 deletar dados na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [4], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucerro!")
    // })


})