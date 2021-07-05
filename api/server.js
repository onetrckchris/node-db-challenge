const express = require('express');
const projectRouter = require('../projects/projects-router');

const server = express();

const logger = (req, res, next) => {
    console.log(`${req.method} request was sent to ${req.url}`);
    next();
}

server.use(express.json());
server.use(logger);
server.use('/api/projects', projectRouter);

module.exports = server;
