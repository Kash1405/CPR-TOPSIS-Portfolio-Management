const mongoose = require('mongoose');

class Access {
    constructor() {
        const AccessSchema = new mongoose.Schema({
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
            token: { type: String },
            expireAt: { type: Date },
        }, { timestamps: true });

        this.model = mongoose.model('Accesses', AccessSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Access;
