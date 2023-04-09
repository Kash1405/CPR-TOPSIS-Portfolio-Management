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
<<<<<<< HEAD
        this.newsRouter = newsRouter(
            controllers.newsController,
            auth
        )
=======
        this.graphRouter = graphRouter(controllers.graphController);
>>>>>>> f8655e20eff0e97cee0d0f9eff9b1647f5b749e6
    }
}

module.exports = Routers;
