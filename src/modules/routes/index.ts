import { Router } from "express";
import bookRoute from "../book/book.route";
import borrowRoute from "../borrow/borrow.route";
import welcomeRouter from "../../util/welcome.route";

const routes = Router();
routes.use("/",welcomeRouter)
routes.use('/api/books', bookRoute);
routes.use('/api/borrow', borrowRoute);
export default routes;