const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

class User {
    constructor() {
        const UserSchema = new mongoose.Schema({
            email: {
                type: String,
                unique: true,
            },
            password: String,
            portfolio: [{ type: ObjectId, ref: 'Company' }],
            watchlist: [{ type: ObjectId, ref: 'Company' }],
            currentValue: Number
        }, { timestamps: true });

        this.model = mongoose.model('Users', UserSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = User;
