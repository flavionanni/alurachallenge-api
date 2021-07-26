const conexao = require('../database/conexao.js');

class Video {

    adiciona(video,res) {

        const sql = 'INSERT INTO Videos SET ?';

        conexao.query(sql, video, (erro, result) => {

            if(erro) {
                res.status(400).json(erro);

            } else {
                res.status(200).json(result);

            }

        });

    };


}


module.exports = new Video