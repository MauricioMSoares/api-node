import express from "express";

const app = express();
app.use(express.json());

const books = [
	{
		id: 1,
		title: "Book 1"
	},
	{
		id: 2,
		title: "Book 2"
	},
];

const searchBook = (id) => {
	return books.findIndex(book => {
		return book.id === Number(id)
	})
}

app.get("/", (req, res) => {
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