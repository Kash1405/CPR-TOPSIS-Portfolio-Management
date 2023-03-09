const express = require('express');

const router = express.Router();

module.exports = (accessController, auth) => {
    router.post('/login', accessController.login.bind(accessController));

    return router;
};
