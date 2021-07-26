const customExpress = require('./source/configs/customExpress');
const connection = require('./source/database/conexao');
const Table = require('./source/database/table');

connection.connect(erro => {
    
    if(erro) {
        console.log(erro);

    } else {
        console.log("Banco de Dados: OK");

        Table.init(connection);

        const app = customExpress();
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
        
    }

})
