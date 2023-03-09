require('dotenv').config();

const redis = require('redis');
const { promisify } = require('util');
const logger = require('./logger');
const { REDIS_HOST, REDIS_PORT } = process.env;

const connectRedis = () => {
    const obj = {
        host: REDIS_HOST,
        port: REDIS_PORT,
    };
    return new Promise((resolve, reject) => {
        const client = redis.createClient(obj);
        const f = {
            get: promisify(client.get).bind(client),
            set: promisify(client.set).bind(client),
            del: promisify(client.del).bind(client),
            client,
        };
        client.on('connect', () => {
            logger.info('Redis connected');
            resolve(f);
        });
        client.on('err', (err) => {
            logger.info('error', err);
            reject(err);
        });
    });
};

module.exports = connectRedis();
