import book from "../models/Book.js";

class BookController {
  static async listAll(req, res) {
    try {
      const bookList = await book.find({});

      if (bookList.length > 0) {
        res.status(200).json(bookList);
      } else {
        res.status(204).json(bookList);
      };
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to list books` })
    };
  };

  static async findById(req, res) {
    try {
      const id = req.params.id
      const bookById = await book.findById(id);

      if (bookById.length > 0) {
        res.status(200).json(bookById);
      } else {
        res.status(204).json(bookById);
      };
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to find book` })
    };
  };

  static async createBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({
        message: "Book created",
        book: newBook,
      });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to create book` })
    };
  };

  static async updateById(req, res) {
    try {
      const id = req.params.id
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book updated" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to update book` })
    };
  };

  static async deleteById(req, res) {
    try {
      const id = req.params.id
      await book.findByIdAndDelete(id);
      res.status(204).json({ message: "Book deleted" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to delete book` })
    };
  };
};

export default BookController;
