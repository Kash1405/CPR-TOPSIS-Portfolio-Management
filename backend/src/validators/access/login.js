const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const {
    CustomError
} = require('./../../util/error');

const ajv = new Ajv.default({ formats: ['email'] }); // options can be passed, e.g. {allErrors: true}
addFormats(ajv);

const schema = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
    },
    required: ['email', 'password'],
    additionalProperties: false
};

const test = (req, res, next) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
        return next(new CustomError(validate.errors));
    }
    return next();
};

module.exports = () => test;