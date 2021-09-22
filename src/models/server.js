const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const mongoConnect = require('../db/config.mongodb');
const userRoutes = require('../routes/user.routes');

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

    async setDB() {
        await mongoConnect();
    }

    setMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(morgan('dev'));
    }

    setRoutes() {
        this.app.use(this.basePath + '/user', userRoutes);
    }

    start() { }

}

module.exports = Server;