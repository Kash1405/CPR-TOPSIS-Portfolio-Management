const express = require('express');

// loaders
require('./loaders/mongoose');
const expressLoader = require('./loaders/express');

// controllers
const Services = require('./services/index');

// controllers
const Controllers = require('./controllers/index');

// middlewares
const userAuth = require('./middleware/auth');

// routes
const Routers = require('./routers/index');

module.exports = () => {
    const services = new Services();
    const controllers = new Controllers(services);
    const routers = new Routers(
        controllers,
        userAuth({
            accessService: services.accessService,
        })
    );

    const app = express();

    // Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

    expressLoader.pre({ app });

    // routers here
    app.use('/v1/user', routers.userRouter);
    app.use('/v1/access', routers.accessRouter);
    app.use('/v1/company', routers.companyRouter);
    app.use('/v1/news', routers.newsRouter);
    app.use('/v1/graph', routers.graphRouter);

    expressLoader.post({ app });

    return {
        app,
    };
};
