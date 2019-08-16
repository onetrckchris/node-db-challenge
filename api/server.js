const express = require('express');
// const recipeRouter = require('../recipes/recipes-router');

const server = express();

const logger = (req, res, next) => {
    console.log(`${req.method} request was sent to ${req.url}`);
    next();
}

server.use(express.json());
server.use(logger);
// server.use('/api/recipes', recipeRouter);

module.exports = server;
