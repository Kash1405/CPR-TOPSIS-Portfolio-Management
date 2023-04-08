const express = require('express');

const router = express.Router();

module.exports = (companyController, auth) => {

    router.get('/', companyController.findAll.bind(companyController))
    router.get('/:ticker', companyController.findOne.bind(companyController));

    router.post('/', companyController.createOne.bind(companyController));
    router.post('/multi', companyController.createMany.bind(companyController))

    // router.get('/me', auth, userController.constructor.getProfile.bind(userController));s
    return router;
};
