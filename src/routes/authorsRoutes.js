import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listAll);
routes.get("/authors/:id", AuthorController.findById);
routes.post("/authors", AuthorController.create);
routes.put("/authors/:id", AuthorController.updateById);
routes.delete("/authors/:id", AuthorController.deleteById);

export default routes;
