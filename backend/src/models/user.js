const mongoose = require('mongoose');

class User {
    constructor() {
        const UserSchema = new mongoose.Schema({
            // username: {
            //     type: String,
            //     unique: true,
            // },
            email: {
                type: String,
                unique: true,
            },
            // firstName: String,
            // lastName: String,
            password: String,
            // gender: { type: String, enum: ['male', 'female', 'non-binary'] },
            // profilePhoto: String,
        }, { timestamps: true });

        this.model = mongoose.model('Users', UserSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = User;
