const AppErr = require("../../middlewares/AppErr");

const FetchBlogs = async(req, res, next) => {
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

const FetchSingleBlogs = async(req, res, next) => {
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

const CreateBlog = async(req, res, next) => {
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

const UpdateBlog = async(req, res, next) => {
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

const DeleteBlog = async(req, res, next) => {
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
    FetchBlogs,
    FetchSingleBlogs,
    CreateBlog,
    UpdateBlog,
    DeleteBlog,
}