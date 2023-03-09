require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { NODE_ENV, SERVICE_NAME } = process.env;

const middleware = express.Router();

middleware.use('/health', (req, res) => {
    const response = {
        version: process.env.npm_package_version,
        env: NODE_ENV,
        message: 'pong',
        service_name: SERVICE_NAME,
        mongodb: mongoose.STATES[mongoose.connection.readyState],
        redis: req.redisClient.connected ? 'connected' : 'something went wrong'
    };
    return res.json(response);
});

module.exports = middleware;
