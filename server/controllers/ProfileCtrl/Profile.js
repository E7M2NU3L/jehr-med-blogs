const AppErr = require("../../middlewares/AppErr");

const FetchProfile = async(req, res, next) => {
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

const FetchSingleProfile = async(req, res, next) => {
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

const CreateProfile = async(req, res, next) => {
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

const UpdateProfile = async(req, res, next) => {
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

const DeleteProfile = async(req, res, next) => {
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
    FetchProfile,
    FetchSingleProfile,
    CreateProfile,
    UpdateProfile,
    DeleteProfile,
}