import express from "express";
import connectDB from "./config/dbConnect.js";
import book from "./models/Book.js"

const conn = await connectDB();

conn.on("Error", (error) => {
	console.error("Failed to connect to database", error);
});

conn.once("Open", () => {
	console.log("Connected to database");
});

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
	const books = await book.find({});
	res.status(200).send("Node API");
});

app.get("/books", (req, res) => {
	res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
	const index = searchBook(req.params.id);
	res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
	books.push(req.body);
	res.status(201).send("Book created");
});

app.put("/books/:id", (req, res) => {
	const index = searchBook(req.params.id);
	books[index].title = req.body.title;
	res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
	const index = searchBook(req.params.id);
	books.splice(index, 1);
	res.status(204).send("Book deleted");
});

export default app;
