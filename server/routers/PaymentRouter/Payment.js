const express = require('express');

const PaymentRouter = express.Router();

// Routes
// make payment routes
PaymentRouter.post('/make-payment');

// fetch single payment details
PaymentRouter.get('/payment/:id');

// all Info
PaymentRouter.get('/payment');

module.exports = PaymentRouter;