const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.setConfig();
        this.setStatics();
        this.setDB();
        this.setMiddlewares();
        this.basePath = '/api/v1'
        this.setRoutes();
    }

    setConfig() {
        if (process.env.NODE_ENV !== 'production') {
            require('dotenv').config();
        }
    }

    setStatics() {
        this.app.use(express.static('public'));
    }

    setDB() { }

    setMiddlewares() { }

    setRoutes() { }

    start() { }

}

module.exports = Server;