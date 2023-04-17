const express = require('express')
const router = express.Router();

module.exports = graphController => {
    router.get('/:nMonths/:correlationType/:cpr/:filter/:similar/:cluster/:subset', graphController.runScript.bind(graphController));
    return router;
};