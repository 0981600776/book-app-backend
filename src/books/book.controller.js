const Book = require("./book.model");

const postABook = async (req, res) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({messge: "Book posted successfullly", book: newBook})
    } catch (error) {
        console.log("Error creating book", error);
        res.status(500).send({messge: "Faild to create book"})
    }
}

// get all books
const getAllBooks =  async (req, res) => {
    try {
        const books = await Book.find().sort({ createAt: -1});
        res.status(200).send(books)
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message: "Failed to fetch books"})
    }
}

// single book
const getSingleBook = async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send(book)
    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({message: "Failed to fetch book"})
    }
}

// update book data
const updateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedABook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedABook) {
            res.status(404).send({message: "Book not found"})
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedABook
        });
    } catch (error) {
        console.error("Error update book", error);
        res.status(500).send({message: "Failed to update book"});
    }
}

// delete a book
const deleteABook = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if (!deleteBook) {
            res.status(404).send({message: "Book Not Found!"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deleteBook
        })
    } catch (error) {
        console.error("Error delete a book", error);
        res.status(500).send({message: "Failed delete a book"});
    }
}
module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteABook
}