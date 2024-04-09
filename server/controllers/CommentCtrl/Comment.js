const AppErr = require("../../middlewares/AppErr");

const FetchComments = async(req, res, next) => {
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

const FetchSingleComments = async(req, res, next) => {
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

const CreateComments = async(req, res, next) => {
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

const UpdateComments = async(req, res, next) => {
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

const DeleteComments = async(req, res, next) => {
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
    FetchComments,
    FetchSingleComments,
    CreateComments,
    UpdateComments,
    DeleteComments,
}