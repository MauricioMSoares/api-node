import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.listAll);
routes.get("/books/search", BookController.listAllByPublisher);
routes.get("/books/:id", BookController.findById);
routes.post("/books", BookController.create);
routes.put("/books/:id", BookController.updateById);
routes.delete("/books/:id", BookController.deleteById);

export default routes;
