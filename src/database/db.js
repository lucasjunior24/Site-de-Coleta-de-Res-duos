// inportar a dependecia do sqlite
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irar fazer opecações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// ultilizar o objeto de banco de dados para a nossa opecação
db.serialize(() => {

    // criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            address TEXT,
            address TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // inserir dados na tebala

    // consultar dados na tabela

    // deletar dados na tabela
})