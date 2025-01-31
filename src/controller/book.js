const bookService = require('../service/book');

class BookController {
    async createBook(req, res) {
        try {
            const book = await bookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateBook(req, res) {
        try {
            const bookRes = await bookService.updateBook(req.body.id, req.body);
            res.status(200).json(bookRes);
        } catch (error) {
            if (error.message === 'Book not found') {
                return res.status(404).json();
            }
            res.status(500).json({ error: error.message });
        }
    }

    async deleteBook(req, res) {
        try {
            await bookService.deleteBook(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getBookById(req, res) {
        try {
            const book = await bookService.getBookById(req.params.id);
            if (book == null) {
                return res.status(404).json();
            }
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async searchBooks(req, res) {
        try {
            const filter = req.query;
            const books = await bookService.searchBooks(filter);
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new BookController();