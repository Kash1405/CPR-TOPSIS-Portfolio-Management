const { validationResult } = require('express-validator');
const axios = require('axios')

class NewsController {


    async findAll(req, res, next) {

        let newsItems

        const apiUrl = 'https://api.nasdaq.com/api/company/UL/news-headlines';
        const queryParams = {
            limit: 10,
            offset: 0,
            scrollId: null
        };

        try {
            const response = await axios.get(apiUrl, { params: queryParams });
            newsItems = response.data.data.newsList
        } catch (error) {
            console.error(error);
            res.status(500).send('Error retrieving news');
        }

        return res.json({
            newsItems
        })
    }
}

module.exports = NewsController;
