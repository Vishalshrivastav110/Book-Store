const Book = require("../models/bookModel");


// GET /api/books
// ===============================
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.error("Get Books Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET SINGLE BOOK BY ID
// GET /api/books/:id
// ===============================
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Get Book Error:", error);
    res.status(500).json({ message: "Invalid Book ID" });
  }
};
// GET BOOKS WITH SEARCH

exports.getBooks = async (req, res) => {
  try {
    const { search } = req.query;

    let query = {};
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
        ],
      };
    }

    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// ===============================
// ADD NEW BOOK (ADMIN)
// POST /api/books
// ===============================
exports.createBook = async (req, res) => {
  try {
    const { title, author, price, image, description, category, stock } = req.body;

    if (!title || !author || !price || !image || !description) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const book = new Book({
      title,
      author,
      price,
      image,
      description,
      category,
      stock,
    });

    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Create Book Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ===============================
// UPDATE BOOK
// PUT /api/books/:id
// ===============================
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Update Book Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ===============================
// DELETE BOOK
// DELETE /api/books/:id
// ===============================
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Delete Book Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
