import mongoose from "mongoose";

const bookScheme = mongoose.Schema({
  name: String,
  price: Number,
  tittle: String,
  category: String,
  image: String
})
const Book = mongoose.model("Book", bookScheme);

export default Book;