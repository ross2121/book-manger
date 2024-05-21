const express=require("express")
const router=express.Router();
const {getAllBooks,getBookById,createBook,updateBook,deleteBook}=require("../controllers/book")
router.route("/")
.post(createBook).
get(getAllBooks);
router.route("/:id").get(getBookById).delete(deleteBook).put(updateBook)
module.exports=router;