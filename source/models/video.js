const conexao = require('../database/conexao.js');

class Video {

    add(video,res) {

        const sql = 'INSERT INTO Videos SET ?';

        conexao.query(sql, video, (erro, result) => {

            if(erro) {
                res.status(400).json(erro);

            } else {
                res.status(200).json(result);

            }

        });

    };

    list(res) {
        const sql = "SELECT * FROM Videos";

        conexao.query(sql, (erro, result) => {
            if(erro) {
                res.status(400).json(erro);

            } else {
                res.status(200).json(result);

            }


        });

    };

    searchToID(id, res) {
        const sql = `SELECT * FROM Videos WHERE id=${id}`;

        conexao.query(sql, (erro, result) => {
            const viewVideo = result[0];

            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(viewVideo);
            }
        });
    };

    modify(id, value, res) {
        const sql = `UPDATE Videos SET ? WHERE id=?`;

        conexao.query(sql, [value, id], (erro, result) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(value);
            }

        });

    };

    delete(id, res) {
        const sql = 'DELETE FROM Videos WHERE id=?';
    
        conexao.query(sql,id,(erro, result) => {
            if(erro) {
                res.status(400).json(erro);
                
            } else {
                res.status(200).json({id});
            }
        })

    }

}

module.exports = new Video