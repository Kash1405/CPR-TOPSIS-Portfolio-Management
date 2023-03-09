function NotFoundError(model) {
    return new Error(`Error! ${model} not found!`);
}

function CannotUpdateError(model) {
    return new Error(`Cannot update ${model} error!`);
}

function CannotCreateError(model) {
    return new Error(`Cannot create ${model} error!`);
}
function UnauthorizedError() {
    return new Error('Unauthorized');
}

function CustomError(message) {
    return new Error(message);
}

function InvalidBodyError(key) {
    return new Error(`Cannot pass field "${key}" to this method`);
}

const AsyncErrors = (e) => new Error(e, 400);

module.exports = {
    NotFoundError,
    CannotUpdateError,
    CannotCreateError,
    UnauthorizedError,
    CustomError,
    InvalidBodyError,
    AsyncErrors,
};
