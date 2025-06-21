import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";


const borrowShchema = new Schema<IBorrow>({
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        validate:{
            validator: function(value:number){
                return value>0;
            },
            message: "Borrow Item must be more than 1 "
        }
        
    },
    dueDate: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);
// borrowShchema.pre("save",async function(){
//     const book= await Book.findById(this.book)
//     if(!book) throw new Error("Book not found.")
//     if (!book.available) {
//         throw new Error("No copies available. Book is currently unavailable.");
//     }
//      if (this.quantity > book.copies) {
//         throw new Error(`Only ${book.copies} copies available.`);
//     }
//     book.copies -= this.quantity;   
//     if(book.copies==0)book.available=false;    
//          await book.save();
        
// })



export const Borrow=model<IBorrow>("Borrow",borrowShchema)