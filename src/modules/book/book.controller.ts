import { json, Request, Response } from "express";
import Book from "./book.model";


const insertNewBook = async (req: Request, res: Response) => {
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
        res.status(500).json({
            success: false,
            message: "Error occurred",
            error
        });
    }

}

const getBooks = async (req: Request, res: Response) => {
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
        res.status(500).json({
            success: false,
            message: "Error occurred",
            error
        });

    }

}
const getBookByID = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.bookId);
        res.send(
            {
                success: true,
                message: "Book retrieved successfully",
                data: book
            }
        )
    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred",
            error
        });

    }
}




const updateBook = async (req: Request, res: Response) => {
    try {
        const data = await Book.findByIdAndUpdate(req.params.bookId,req.body,{new:true})
        res.send({
            "success": true,
            "message": "Book updated successfully",
            data
        })
    }
    catch (error) {
         res.status(500).json({
            success: false,
            message: "Error occurred",
            error
        });

    }

}

export const bookController = {
    insertNewBook,
    getBooks,
    getBookByID,
    updateBook

}