import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler=(err, req, res, next)=>{
    let errorResponse={
        message: "Something went wrong",
        success:false,
        error: {},
    };
    if(err.name==="ValidationError"){
        errorResponse={
            message:"Validation failed",
            success:false,
            error:{
                name:err.name,
                errors: err.errors,
            },
        };   
    }
    else if(err instanceof Error){
        errorResponse={
            message: err.message|| "Unexpected error",
            success:false,
            error:{
                name:err.name,
                 stack: process.env.NODE_ENV === "production" ? undefined : err.stack,

            },
        };
    }
    res.send(errorResponse);
}
export default globalErrorHandler;