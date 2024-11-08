const {default: mongoose} = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        city: {
            type: String,
            require: true,
        },
        country: String,
        state: String,
        zipcode: String,
    },
    phone: {
        type: Number,
        require: true,
    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            require: true,
        }
    ],
    totalPrice: {
        type: Number,
        require: true,
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;