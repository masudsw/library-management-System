import { NextFunction, Request, Response } from "express";
import Book from "./book.model";
import { Types } from "mongoose";


const insertNewBook = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const data = await Book.create(req.body);

        res.send({
            success: true,
            message: "Book created successfully",
            data: {
                _id: data._id,
                title: data.title,
                author: data.author,
                genre: data.genre,
                isbn: data.isbn,
                description: data.description,
                copies: data.copies,
                available: data.available,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            },
        });
    } catch (error) {
        next(error);
    }

}

const getBooks = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const {
            filter = "",
            sortBy = "title",
            sort = "asc",
            limit = "10"
        } = req.query;

        const books = await Book.find({
            ...(filter && { genre: filter })
        })
            .sort({ [sortBy as string]: sort === "desc" ? -1 : 1 })
            .limit(Number(limit))

        res.send({
            success: true,
            message: "Books retrieved successfully",
            data: books
        })

    } catch (error) {
        next(error)

    }

}
const getBookByID = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const bookId=req.params.bookId;
        if(!Types.ObjectId.isValid(bookId)){
            throw new Error(`Invalid Book ID: ${bookId}`)
        }
        const book = await Book.findById(req.params.bookId);
        if(!book){
            throw new Error("Book not found")
        }
        
        res.send(
            {
                success: true,
                message: "Book retrieved successfully",
                data: book
            }
        )
    }

    catch (error) {
        next(error)

    }
}


const updateBook = async (req: Request, res: Response,next:NextFunction) => {
    try {
         const bookId=req.params.bookId;
        if(!Types.ObjectId.isValid(bookId)){
            throw new Error(`Invalid Book ID: ${bookId}`)
        }
        console.log(bookId)
        console.log(req.body)
        const data = await Book.findByIdAndUpdate(bookId, req.body, { new: true, runValidators: true });
        console.log("data",data)
        if(!data){
            throw new Error("Book not found")
        }
        res.send({
            "success": true,
            "message": "Book updated successfully",
            data
        })
    }
    catch (error) {
        next(error)

    }

}

const deleteBook = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const bookId=req.params.bookId;
        if(!Types.ObjectId.isValid(bookId)){
            throw new Error(`Invalid Book ID: ${bookId}`)
        }
        const book=await Book.findByIdAndDelete(bookId)
        if(!book){
            throw new Error("Book not found")
        }
        res.send({
            "success": true,
            "message": "Book deleted successfully",
            data: null
        })
    }
    catch (error) {
      next(error)

    }

}

export const bookController = {
    insertNewBook,
    getBooks,
    getBookByID,
    updateBook,
    deleteBook

}