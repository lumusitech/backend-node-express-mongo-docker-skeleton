const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.setConfig();
        this.setStatics();
        this.setDB();
        this.setMiddlewares();
        this.basePath='/api/v1'
        this.setRoutes();
    }

    setConfig() { }

    setStatics() { }

    setDB() { }

    setMiddlewares() { }

    setRoutes() { }

    start() { }

}

module.exports = Server;