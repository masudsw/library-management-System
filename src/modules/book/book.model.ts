import { model, Schema } from "mongoose";
import { IBook, IBookModel } from "./book.interface";

const bookSchema=new Schema<IBook>({
title:{
    type:String,
    required:true
},
author:{
    type:String,
     required:true
},
genre:{
    type:String,
    enum:["FICTION","NON_FICTION","SCIENCE","HISTORY","BIOGRAPHY","FANTASY"],
     required:true
},
isbn:{
    type:String,
     required:true,
     unique:[true,"ISBN should can be duplicate"]
},
description:{
    type:String,
     
},
copies:{
    type:Number,
    min:0,
     required:true

},
available:{
    type:Boolean,
    default:true
},

},
{
    timestamps:true,
    versionKey:false
}
)
bookSchema.statics.updateCopiesAfterBorrow = async function (bookId: string, quantity: number) {
    const book = await this.findById(bookId);
    if (!book) throw new Error("Book not found");
    if (!book.available) {
        throw new Error("No copies available. Book is currently unavailable.");
    }
    if (quantity > book.copies) {
        throw new Error(`Only ${book.copies} copies available.`);
    }

    book.copies -= quantity;
    if (book.copies === 0) {
        book.available = false;
    }

    await book.save();
};

const Book=model<IBook,IBookModel>("Book",bookSchema)
export default Book;