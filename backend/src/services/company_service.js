const bcrypt = require('bcrypt');
const error = require('../util/error');
const Base = require('./base_service');

class CompanyService extends Base {
    constructor({ company }) {
        super(company);
    }
}

module.exports = CompanyService;
