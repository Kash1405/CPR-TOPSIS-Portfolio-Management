const userRouter = require('./user_router');
const accessRouter = require('./access_router');
const companyRouter = require('./company_router');
const newsRouter = require("./news_router")
const graphRouter = require('./graph_router');

class Routers {
    constructor(controllers, auth) {
        this.userRouter = userRouter(controllers.userController, auth);
        this.accessRouter = accessRouter(
            controllers.accessController,
            auth
        );
        this.companyRouter = companyRouter(
            controllers.companyController,
            auth
        );
        this.newsRouter = newsRouter(
            controllers.newsController,
            auth
        )
        this.graphRouter = graphRouter(controllers.graphController);
    }
}

module.exports = Routers;
