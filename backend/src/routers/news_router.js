const express = require('express');

const router = express.Router();

module.exports = (newsController, auth) => {

    router.get('/', newsController.findAll.bind(newsController))

    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
