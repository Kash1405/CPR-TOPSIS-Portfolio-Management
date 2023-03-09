require('dotenv').config();

const { createLogger, format, transports } = require('winston');

const { SERVICE_NAME } = process.env;

const { printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => `${timestamp} [${label}] ${level}: ${message}`);

const { combine, timestamp, label } = format;

const logger = createLogger({
    level: 'silly',
    format: combine(label({ label: SERVICE_NAME }), timestamp(), myFormat),
    transports: [new transports.Console()],
});

logger.stream = {
    write: (message) => {
        logger.info(message);
    },
};

module.exports = logger;
