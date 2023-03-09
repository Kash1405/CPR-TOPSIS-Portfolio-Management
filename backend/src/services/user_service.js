const bcrypt = require('bcrypt');
const error = require('../util/error');
const Base = require('./base_service');

class UserService extends Base {
    constructor({ access, user }) {
        super(user);
        this.accessModel = access;
    }

    signup = async ({
        // username,
        email,
        // firstName,
        // lastName,
        password,
        // gender,
        // profilePhoto
    }) => {
        const userAlready = await this.model.findOne({ email });
        if (userAlready) {
            throw error.CustomError('User with email/username already exists');
        }
        let newUser;
        // eslint-disable-next-line no-useless-catch
        try {
            const saltRounds = 10;
            const pass = await bcrypt.hash(password, saltRounds);
            newUser = await this.model.create({
                // username,
                email,
                // firstName,
                // lastName,
                password: pass,
                // gender,
                // profilePhoto
            });
        } catch (e) {
            throw e;
        }
        return newUser;
    }

    login = async ({
        query,
        password,
    }) => {
        const user = await this.model.findOne(query);
        if (!user) {
            throw error.CustomError('User with email/username does not exists');
        }
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            throw error.CustomError('Password does not match');
        }
        user.password = null;
        return user;
    }

    findOneWithoutPassword = async ({
        query,
    }) => {
        const user = await this.model.findOne(query);
        if (!user) {
            throw error.CustomError('User does not exists');
        }
        user.password = null;
        return user;
    }
}

module.exports = UserService;
