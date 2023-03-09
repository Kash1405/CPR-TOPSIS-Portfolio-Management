const morgan = require('morgan');
const logger = require('../util/logger');

morgan.token('reqBody', (req) => JSON.stringify(req.body));
morgan.token('reqHeader', (req) => JSON.stringify(req.headers));

const info =
    ':remote-addr - :remote-user ":method :url HTTP/:http-version"' +
    ':status :res[content-length]' +
    '[:response-time ms] ":referrer" ":user-agent"' +
    ':reqHeader :reqBody';

module.exports = morgan(info, { stream: logger.stream });
