const Server = require('./models/server');

console.log(process.env.APP_NAME);

console.log(process.env.NODE_ENV);

const server = new Server();

server.start();