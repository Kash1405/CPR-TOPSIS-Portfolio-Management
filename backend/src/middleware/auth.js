require('dotenv').config();
const jwt = require('jsonwebtoken');

const error = require('../util/error');
const { publicKey } = require('../config/keys');
const {
    API_TOKEN,
} = process.env;

const auth = ({ accessService }) => async (req, res, next) => {
    try {
        if (req.header('x-api-token')) {
            const token = req.header('x-api-token');
            // eslint-disable-next-line eqeqeq
            if (token == API_TOKEN) {
                res.locals.authToken = token;
                next();
            }
        } else {
            if (!req.header('Authorization')) {
                throw error.UnauthorizedError();
            }
            const authToken = req.header('Authorization').replace('Bearer ', '');
            const access = await accessService.findOne({
                query: { token: authToken }
            });
            if (!access) {
                throw error.UnauthorizedError();
            }

            let user;
            try {
                user = await jwt.verify(access.token, publicKey, { algorithm: 'RS256' });
            } catch (e) {
                throw error.UnauthorizedError();
            }
            res.locals.user = user;
            res.locals.isAdmin = user.isAdmin;
            res.locals.isStaff = user.isStaff;
            res.locals.authToken = authToken;
            next();
        }
    } catch (e) {
        next(e);
    }
};

module.exports = auth;
