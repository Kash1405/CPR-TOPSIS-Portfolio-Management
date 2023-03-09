const express = require('express');

const router = express.Router();

module.exports = (userController, auth) => {

    router.post('/signup', userController.signup.bind(userController));

    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
