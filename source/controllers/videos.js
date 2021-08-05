const Video = require('../models/video.js');

module.exports = app => {

    app.get('/videos', (req, res) => {
        Video.list(res);

   })

    app.get('/videos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Video.searchToID(id, res);

   })

    app.post('/videos', (req, res) => {
        const videos = req.body;

        Video.add(videos, res);

    });

    app.patch('/videos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const value = req.body;

        Video.modify(id, value, res);

    });

    app.delete('/videos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const value = req.body;

        Video.delete(id, res);
    });

    // app.post('/videos', (req, res) => {
    //     console.log(req.body);
    //     res.send('Você esta na rota de videos e está realizando um POST')
    
    // });

}