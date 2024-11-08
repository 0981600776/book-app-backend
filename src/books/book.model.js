const { default: mongoose } = require("mongoose");


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    trending: {
        type: Boolean,
        require: true,
    },
    coverImage: {
        type: String,
        require: true,
    },
    oldPrice: {
        type: Number,
        require: true,
    },
    newPrice: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;