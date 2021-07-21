const express = require('express');
const consign = require('consign');

module.exports = () => {

    const app = express();

    consign()
        .into(app);

        return app;
}