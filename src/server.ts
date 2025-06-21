import express, { Request, Response } from "express"
import cors from "cors"
import config from "./config";
import mongoose from "mongoose";
import routes from "./modules/routes";
import { message } from "./util/message";
const app = express();
app.use(cors())
app.use(express.json())


app.use("/",routes)
app.listen(config.port, () => {
    console.log("server running on port 5000")
})
async function server() {
    try {
        await mongoose.connect(config.database_url as string)
        console.log("connected with mongodb database")
    } catch (error){
        console.error(`server error ${error}`)
    }
   

}
server()