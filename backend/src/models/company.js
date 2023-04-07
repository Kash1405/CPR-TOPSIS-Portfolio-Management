const mongoose = require('mongoose');

class Company {
    constructor() {
        const CompanySchema = new mongoose.Schema({
            ticker: String,
        }, { timestamps: true });

        this.model = mongoose.model('Company', CompanySchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Company;
