import { author } from "../models/Author.js";

class AuthorController {
  static async listAll(req, res) {
    try {
      const authorList = await author.find({});

      if (authorList.length > 0) {
        res.status(200).json(authorList);
      } else {
        res.status(204).json(authorList);
      };
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to list authors` })
    };
  };

  static async findById(req, res) {
    try {
      const id = req.params.id
      const authorById = await author.findById(id);

      if (authorById.length > 0) {
        res.status(200).json(authorById);
      } else {
        res.status(204).json(authorById);
      };
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to find author` })
    };
  };

  static async create(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({
        message: "Author created",
        author: newAuthor,
      });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to create author` })
    };
  };

  static async updateById(req, res) {
    try {
      const id = req.params.id
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author updated" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to update author` })
    };
  };

  static async deleteById(req, res) {
    try {
      const id = req.params.id
      await author.findByIdAndDelete(id);
      res.status(204).json({ message: "Author deleted" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to delete Author` })
    };
  };
};

export default AuthorController;
