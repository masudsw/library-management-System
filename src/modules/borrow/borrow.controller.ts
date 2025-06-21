import { Request, Response } from "express";
import { Borrow } from "./borrow.model";
import Book from "../book/book.model";


const borrowBook = async (req: Request, res: Response) => {

    try {
        const { book, quantity } = req.body;
        await Book.updateCopiesAfterBorrow(book, quantity)// calling static method
        const borrow = new Borrow(req.body)
        await borrow.save();
        res.status(201).send(
            {
                success: true,
                "message": "Book borrowed successfully",
                data: borrow
            }
        )
    } catch (error: any) {
        console.error("Borrow failed", error);
        res.send({
            success: false,
            message: error.message || "Borrowing failed"
        })
    }
}


export const borrowController = {
    borrowBook,
    // borrowedBookSummary
}