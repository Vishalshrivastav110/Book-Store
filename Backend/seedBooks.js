const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("./models/bookModel");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const books = [
  {
    title: "JEE-MAIN 2024",
    author: "John Doe",
    price: 399,
    image: "https://m.media-amazon.com/images/I/71Qg5zalEtL._AC_UF1000,1000_QL80_.jpg",
    category: "Programming",
    description: "Learn React from basics to advanced",
  },
  {
    title: "Node.js Mastery",
    author: "Jane Smith",
    price: 499,
    image: "https://m.media-amazon.com/images/I/71lDUGfRa8L._AC_UF1000,1000_QL80_.jpg",
    category: "Backend",
    description: "Master Node.js and Express",
  },
   {
    title: "JavaScript Deep Dive",
    author: "Alex Brown",
    price: 349,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1m0C6GBS4yhVbl8kzhMtisufcx8sXZ0CBQ&s",
    description: "Master JavaScript concepts deeply.",
  },
  {
   
    title: "Full Stack Guide",
    author: "Emily Clark",
    price: 599,
    image: "https://m.media-amazon.com/images/I/A17fPOnXNmL._AC_UF1000,1000_QL80_.jpg",
    description: "Frontend + Backend complete roadmap.",
  },
  {
  
    title: "Node.js Mastery",
    author: "Jane Smith",
    price: 499,
    category: "Backend",
    image: "https://m.media-amazon.com/images/I/71c6tyM8GbL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Master Node.js, Express, and backend development step by step.",
  },
  {
   
    title: "Node.js Mastery",
    author: "Jane Smith",
    price: 499,
    category: "Backend",
    image: "https://examcart.in/cdn/shop/files/CB2159_5b8a7ce6-6752-4d0e-a5b1-93bf9d54d1f8_700x700.webp?v=1759838650",
    description:
      "Master Node.js, Express, and backend development step by step.",
  },
  {
   
    title: "Node.js Mastery",
    author: "Jane Smith",
    price: 499,
    category: "Backend",
    image: "https://gkpublications.com/cdn/shop/files/GATE2026Mathematics-SolvedPapers_2000-2025.jpg?v=1758093944&width=1100",
    description:
      "Master Node.js, Express, and backend development step by step.",
  },
  {
    title: "Node.js Mastery",
    author: "Jane Smith",
    price: 499,
    category: "Backend",
    image: "https://gkpublications.com/cdn/shop/articles/1749733570_11d375a8-4d36-440d-9b89-dfd424646080.jpg?v=1753951396",
    description:
      "Master Node.js, Express, and backend development step by step.",
  },
];

const importData = async () => {
  try {
    await Book.deleteMany(); // optional
    await Book.insertMany(books);
    console.log("Books imported successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
