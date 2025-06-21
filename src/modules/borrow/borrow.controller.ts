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

const borrowedBookSummary = async (req: Request, res: Response) => {
    try {
        const data = await Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" }
                }

            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookInfo"
                },
            },
            { $unwind: "$bookInfo" },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: "$bookInfo.title",
                        isbn: "$bookInfo.isbn",
                    },
                    totalQuantity: 1,
                },
            },

        ]);
        res.send({
            success: true,
            data
        });
    } catch (error: any) {
        res.send(
            {
                success: false,
                message: error.message || "Aggregation failed"
            }
        );
    }

};
export const borrowController = {
    borrowBook,
    borrowedBookSummary
}