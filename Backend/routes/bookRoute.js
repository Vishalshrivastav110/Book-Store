const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/bookControllers");

// GET all books
router.get("/", getAllBooks);

// GET single book by ID
router.get("/:id", getBookById);

// ADD new book
router.post("/", createBook);

// UPDATE book
router.put("/:id", updateBook);

// DELETE book
router.delete("/:id", deleteBook);

module.exports = router;
