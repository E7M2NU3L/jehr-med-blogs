const AppErr = require("../../middlewares/AppErr");

const FetchBook = async(req, res, next) => {
    try {
        console.log("Page Loaded Success");
        return res.json({
            status: 200,
            message: "Page Loaded Success",
        })
    } catch (error) {
        console.log(error.message);
        return next(AppErr(error.message, 500));
    }
}

const FetchSingleBook = async(req, res, next) => {
    try {
        console.log("Page Loaded Success");
        return res.json({
            status: 200,
            message: "Page Loaded Success",
        })
    } catch (error) {
        console.log(error.message);
        return next(AppErr(error.message, 500));
    }
}

const CreateBook = async(req, res, next) => {
    try {
        console.log("Page Loaded Success");
        return res.json({
            status: 200,
            message: "Page Loaded Success",
        })
    } catch (error) {
        console.log(error.message);
        return next(AppErr(error.message, 500));
    }
}

const UpdateBook = async(req, res, next) => {
    try {
        console.log("Page Loaded Success");
        return res.json({
            status: 200,
            message: "Page Loaded Success",
        })
    } catch (error) {
        console.log(error.message);
        return next(AppErr(error.message, 500));
    }
}

const DeleteBook = async(req, res, next) => {
    try {
        console.log("Page Loaded Success");
        return res.json({
            status: 200,
            message: "Page Loaded Success",
        })
    } catch (error) {
        console.log(error.message);
        return next(AppErr(error.message, 500));
    }
}

module.exports = {
    FetchBook,
    FetchSingleBook,
    CreateBook,
    UpdateBook,
    DeleteBook,
}