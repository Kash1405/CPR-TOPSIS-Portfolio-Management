const moment = require('moment-timezone');
const jwt = require('jsonwebtoken');

const error = require('../util/error');
const Base = require('./base_service');
const { HKT } = require('../constants/timezone');
const { privateKey } = require('../config/keys');

class AccessService extends Base {
    constructor({ access }) {
        super(access);
    }

    createToken = async ({
        userId,
        user,
    }) => {
        const obj = user;
        const token = jwt.sign(obj.toJSON(), privateKey, {
            algorithm: 'RS256',
            expiresIn: '30d'
        });
        const expiryDays = 30;
        const expireAt = moment().tz(HKT).startOf('day').add(expiryDays, 'days');
        const access = await this.model.create({ userId, token, expireAt });
        if (!access) {
            throw error.CannotCreateError('Token');
        }
        return access;
    }
}

module.exports = AccessService;
