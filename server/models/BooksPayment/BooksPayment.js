const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    BookDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books"
    },
    BuyStatus: {
        type: String,
        enum: ['pending', 'completed'],
        required: true,
        default: 'pending',
    },
    PaymentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;