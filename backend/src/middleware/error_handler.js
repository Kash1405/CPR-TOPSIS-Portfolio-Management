// eslint-disable-next-line
module.exports = () => (err, req, res, next) => {
    let status = err.status || err.statusCode || 500;
    if (status < 400) status = 500;
    res.statusCode = status;

    const body = {
        status,
        stack: err.stack,
    };

    if (status === 401) {
        body.code = 'PERMISSION_DENIED';
        body.message = {
            en: 'You are not authorized for this resource.',
            zht: '你沒有存取權限',
        };
    } else {
    // client errors
        body.message = err.message;
    }

    if (err.name) body.name = err.name;

    // console.log(body);
    res.json({
        error: body,
    }).send();
};
