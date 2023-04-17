const mongoose = require('mongoose');

const newsItemSchema = new mongoose.Schema({
    title: String,
    source: String
});

class Company {
    constructor() {
        const CompanySchema = new mongoose.Schema({
            ticker: String,
            news_items: [newsItemSchema]
        }, { timestamps: true });

        this.model = mongoose.model('Company', CompanySchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Company;
