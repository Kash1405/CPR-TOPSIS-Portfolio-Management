const { validationResult } = require('express-validator');

class AccessController {
    constructor({ user, access }) {
        this.userService = user;
        this.accessService = access;
    }

    async login(req, res, next) {
        let user;
        let token;
        const { email, password } = req.body

        console.log("Hi")
        try {
            user = await this.userService.login({
                query: {
                    email
                },
                password
            });
        } catch (e) {
            return next(e);
        }
        try {
            token = await this.accessService.createToken({
                userId: user._id,
                user,
            });
        } catch (e) {
            return next(e);
        }
        return res.json({ user, token });
    }
}

module.exports = AccessController;
