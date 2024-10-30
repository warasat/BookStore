 import Book from "../model/book.model.js";

// export const getBook= async(req,res)=>{
// try {
//   const book= await Book.find()
//   res.status(200).json(book)
// } catch (error) {
//   console.log("ERROR",error)
//   res.status(500).json("message: book fetching not occur")
// }
// }

export const getBook= async(req,res)=>{
  try {
    const book = await Book.find();
    console.log(book); // Log the result
    res.status(200).json(book);
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "Book fetching did not occur" });
  }
};
