
const ErrorHandler =  async (err, req, res, next) => {
    const statusCode = req.statusCode ? req.statusCode : 500
    switch (statusCode) {
        case 401:
            res.json({ title: "Unauthorized error", message: err.message, stack: err.stack })
            break;
        case 403:
            res.json({ title: "Forbidden", message: err.message, stack: err.stack })
            break;
        case 404:
            res.json({ title: "Page not Found", message: err.message, stack: err.stack })
            break;
        case 500:
        default:
            res.json({ title: "Unauthorized error", message: err.message, stack: err.stack })
            break;
    }
}

module.exports = ErrorHandler