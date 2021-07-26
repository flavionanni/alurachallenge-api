const express = require('express');
const consign = require('consign');

module.exports = () => {

    const app = express();

    app.use(express.urlencoded({extend: true}));
    app.use(express.json());


    consign()
        .include('/source/controllers')
        .into(app);

        return app;
}