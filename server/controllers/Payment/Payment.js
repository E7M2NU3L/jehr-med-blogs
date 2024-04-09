const AppErr = require("../../middlewares/AppErr");

const MakePayments = async(req, res, next) => {
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

const ViewAllPayments = async(req, res, next) => {
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

const ViewSinglePayment = async(req, res, next) => {
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

const HelpPayments = async(req, res, next) => {
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

const CancelPayment = async(req, res, next) => {
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
    MakePayments,
    ViewAllPayments,
    ViewSinglePayment,
    HelpPayments,
    CancelPayment,
}