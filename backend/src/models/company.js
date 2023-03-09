const mongoose = require('mongoose');

class Company {
    constructor() {
        const CompanySchema = new mongoose.Schema({
            ticker: String,
            exchange: String,
            type: String,
            sector: String,
            industry: String,
            website: String,
            description: String,
            peratio: Number,
            expectedpe: Number,
            expectedpeg: Number,
            dividendYield: Number,
            totalLiabilities: Number,
            debtEquity: Number,
            totalCurrentAssets: Number,
            totalCurrentLiab: Number,
            currentRatio: Number

        }, { timestamps: true });

        this.model = mongoose.model('Company', CompanySchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Company;
