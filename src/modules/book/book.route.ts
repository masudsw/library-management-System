import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoute=Router();
bookRoute.post("/",bookController.insertNewBook);
bookRoute.get("/",bookController.getBooks);
bookRoute.get("/:bookId",bookController.getBookByID)
bookRoute.put("/:bookId",bookController.updateBook)
export default bookRoute;