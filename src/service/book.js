const bookRepository = require('../repository/book');

class BookService {
    async createBook(bookData) {
        return await bookRepository.createBook(bookData);
    }
    
    async updateBook(id, bookData) {
        const exists = await bookRepository.IsExistBook(id);
        if (!exists) {
            throw new Error('Book not found');
        }

        return await bookRepository.updateBook(id, bookData);
    }

    async deleteBook(id) {
        await bookRepository.deleteBook(id);
    }

    async getBookById(id) {
        return await bookRepository.getBookById(id);
    }

    async searchBooks(filter) {
        return await bookRepository.searchBooks(filter);
    }
}

module.exports = new BookService();