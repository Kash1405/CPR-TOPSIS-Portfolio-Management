const express = require('express');
const cors = require('cors');
const responseTime = require('response-time');
const errorHandler = require('../middleware/error_handler');
const logger = require('../middleware/logger');
const health = require('../middleware/health');

const pre = ({ app }) => {
    app.use(logger);
    app.use(cors());
    app.use(responseTime());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb' }));
    app.use(health);
};

const post = ({ app }) => {
    app.get('/sys/health', (req, res) => {
        res.send('OK');
    });
    app.use(errorHandler());
};

module.exports = {
    pre,
    post,
};
