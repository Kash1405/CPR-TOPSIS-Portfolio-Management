class UserController {
    constructor({ user }) {
        this.userService = user;
    }

    async addToWatchlist(req, res, next) {
        let user = res.locals.user
        let updatedUser
        let currWatchList = user.watchlist
        let newWatchList = [...currWatchList, req.body.ticker]

        try {
            updatedUser = await this.userService.updateOne({
                query: {
                    _id: user._id
                },
                body: {
                    watchlist: newWatchList
                }
            })
        }
        catch (e) {
            return next(e)
        }

        return res.json({
            updatedUser
        })
        // pull his watchlist, and add the ticker to the watchlist
    }

    async signup(req, res, next) {
        let user;
        try {
            user = await this.userService.signup({ ...req.body })
        }
        catch (e) {
            return next(e)
        }

        res.json({
            user
        })
    }
}

module.exports = UserController;
