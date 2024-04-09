// App Errr Hanlder Global
const GlobalAppErr = (err, req, res, next) => {

    // Error parameters
    const message = err.message ? err.message : "Error Unknwon";
    const stack = err.stack ? err.stack : "Stack of the Error is undefined"
    const status = err.status ? err.status : "Failed";
    const statusCode = err.statusCode ? err.statusCode : 404;

    // creating the Error Response
    res.status(statusCode).json({
        status,
        message,
        stack,
    })
    next()
}

// exporting the module
module.exports = GlobalAppErr;