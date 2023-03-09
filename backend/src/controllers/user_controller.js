class UserController {
    constructor({ user }) {
        this.userService = user;
    }

    async signup (req, res, next){
        let user;
        try{
            user = await this.userService.signup({...req.body})
        }
        catch(e){
            return next(e)
        }

        res.json({
            user
        })
    }
}

module.exports = UserController;
