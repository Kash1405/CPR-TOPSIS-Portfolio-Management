const { validationResult } = require('express-validator');

class CompanyController {
    constructor({ company }) {
        this.companyService = company
    }

    async findOne(req, res, next) {
        const { ticker } = req.params
        let company;

        try {
            company = await this.companyService.findOne({
                query: {
                    ticker
                }
            })
        }
        catch (e) {
            return next(e)
        }

        return res.json({
            company
        })
    }

    async findAll(req, res, next) {

        let musicItems

        const { category } = req.query

        try {
            musicItems = typeof (category) === 'undefined' ?
                await this.companyService.findMany({}) :
                await this.companyService.findMany({
                    query: {
                        category
                    }
                })
        }
        catch (e) {
            return next(e)
        }


        return res.json({
            musicItems
        })
    }

    async findByCategory(req, res, next) {
        let musicItems;
        const { category } = req.body;

        try {
            musicItems = await this.companyService.findMany({
                query: {
                    category
                }
            })
        }
        catch (e) {
            return next(e)
        }
        return res.json({
            musicItems
        })
    }

    async createOne(req, res, next) {

        let hike

        try {
            hike = await this.companyService.createOne({
                query: {
                    ...req.body
                }
            })
        }
        catch (e) {
            return next(e)
        }

        return res.json({
            hike
        })
    }

    async createMany(req, res, next) {
        const { list } = req.body

        let companies;
        try {
            companies = await this.companyService.createMany({
                list
            })
        }
        catch (e) {
            return next(e)
        }

        return res.json({
            companies
        })
    }
}

module.exports = CompanyController;
