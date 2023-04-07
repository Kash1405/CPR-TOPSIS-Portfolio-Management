const UserController = require('./user_controller');
const AccessController = require('./access_contoller');
const CompanyController = require('./company_controller');
const GraphController = require('./graph_controller');

class Controllers {
    constructor(services) {
        this.userController = new UserController({
            user: services.userService,
        });
        this.accessController = new AccessController({
            user: services.userService,
            access: services.accessService,
        });
        this.companyController = new CompanyController({
            company: services.companyService,
        });
        this.graphController = new GraphController();
    }
}


module.exports = Controllers;
