const UserModel = require('./user');
const AccessModel = require('./access');
const CompanyModel = require('./company');

class Models {
    constructor() {
        this.userModel = new UserModel().getModel();
        this.accessModel = new AccessModel().getModel();
        this.companyModel = new CompanyModel().getModel();
    }

}


module.exports = Models;