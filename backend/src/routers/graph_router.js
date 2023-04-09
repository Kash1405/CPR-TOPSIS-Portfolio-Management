const express = require('express')
const router = express.Router();

module.exports = graphController => {
    router.get('/', graphController.runScript.bind(graphController));
    return router;
};