const AppErr = (message, statuscode) => {

    let error_message = message ? message : "Error has Occured";
    let error_code = statuscode? statuscode : 500;

    const error = new Error(error_message);
    error.statusCode = error_code;
    error.stack = error.stack;
    return error;
}

module.exports = AppErr;