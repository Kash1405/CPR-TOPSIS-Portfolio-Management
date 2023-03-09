require('dotenv').config();

const app = require('./src/app');
const logger = require('./src/util/logger');
const {
    PUBLIC_PORT,
} = process.env;

const application = app();

application.app.listen(process.env.PORT || PUBLIC_PORT, () => {
    logger.info(`Server is up on port ${PUBLIC_PORT}`);
});
