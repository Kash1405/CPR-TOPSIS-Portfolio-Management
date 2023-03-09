
require('dotenv').config();

const mongoose = require('mongoose');
const logger = require('../util/logger');
const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB,
    MONGO_RS,
    MONGO_SRV,
    MONGO_USER,
    MONGO_PASSWORD
} = process.env;

mongoose.pluralize(null);

let url;

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
};

if (MONGO_SRV) {
    url = MONGO_SRV;
    options.dbName = MONGO_DB;
} else if (/,/.test(MONGO_HOST)) {
    logger.info('connecting to REPLICA SET');
    url = `mongodb://${MONGO_HOST}/${MONGO_DB}?replicaSet=${MONGO_RS}`;
} else if (MONGO_USER && MONGO_PASSWORD) {
    url = `mongodb://${MONGO_USER}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
} else {
    url = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
}

logger.info(url);
mongoose.connect(url, options);

const db = mongoose.connection;
db.on('error', (err) => {
    logger.error(`connection error: ${err.stack}`);
});
db.once('open', () => {
    logger.info('mongodb connected');
});

module.exports = mongoose;
