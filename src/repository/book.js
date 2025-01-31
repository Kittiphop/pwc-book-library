const db = require('../database/db');

class BookRepository {
    async createBook(book) {
        const { title, author_id, genre_id, published_at } = book;
        const result = await db.query(
            'INSERT INTO books (title, author_id, genre_id, published_at) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, author_id, genre_id, published_at]
        );
        return result.rows[0];
    }

    async IsExistBook(id) {
        const result = await db.query('SELECT id FROM books WHERE id = $1', [id]);
        return result.rowCount > 0;
    }

    async updateBook(id, book) {
        const { title, author_id, genre_id, published_at } = book;
        const result = await db.query(
            'UPDATE books SET title = $1, author_id = $2, genre_id = $3, published_at = $4 WHERE id = $5 RETURNING *',
            [title, author_id, genre_id, published_at, id]
        );
        return result.rows[0];
    }

    async deleteBook(id) {
        await db.query('DELETE FROM books WHERE id = $1', [id]);
    }

    async getBookById(id) {
        const result = await db.query(`
            SELECT books.*, authors.name AS author_name, genres.name AS genre_name 
            FROM books 
            JOIN authors ON books.author_id = authors.id 
            JOIN genres ON books.genre_id = genres.id 
            WHERE books.id = $1
            `, [id]);
        return result.rows[0];
    }

    async searchBooks(filter) {
        const { title, author, genre } = filter;
    
        const query = `
            SELECT b.* FROM books b
            JOIN authors a ON b.author_id = a.id
            JOIN genres g ON b.genre_id = g.id
            WHERE ($1::text IS NULL OR b.title ILIKE '%' || $1 || '%') AND
                  ($2::text IS NULL OR a.name ILIKE '%' || $2 || '%') AND
                  ($3::text IS NULL OR g.name ILIKE '%' || $3 || '%')`;
    
        const result = await db.query(query, [
            title || null, 
            author || null, 
            genre || null
        ]);

        return result.rows;
    }


}

module.exports = new BookRepository();