

class Table {

    init(connection) {
        this.connection = connection;
        this.createTable();
    }

    createTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS Videos (id int NOT NULL AUTO_INCREMENT, titulo varchar(80) NOT NULL, descricao varchar(300) NOT NULL, url varchar(2083) NOT NULL, PRIMARY KEY(id));'

        this.connection.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Tabela criada com sucesso');

            }

        })

    }

}

module.exports = new Table();