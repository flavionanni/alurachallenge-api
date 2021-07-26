const Video = require('../models/video.js');

module.exports = app => {

    app.get('/videos', (req, res) => res.send('Você esta na rota de videos e está realizando um GET'));

    app.post('/videos', (req, res) => {
        const videos = req.body;

        Video.adiciona(videos, res);

    });

    // app.post('/videos', (req, res) => {
    //     console.log(req.body);
    //     res.send('Você esta na rota de videos e está realizando um POST')
    
    // });

}