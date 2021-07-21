const customExpress = require('./source/configs/customExpress');
const connection = require('./source/database/conexao');


connection.connect(erro => {
    
    if(erro) {
        console.log(erro);

    } else {
        console.log("Banco de Dados: OK");
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
        
    }

})
