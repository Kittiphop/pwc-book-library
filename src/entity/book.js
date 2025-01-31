class Book {
    constructor(id, title, author_id, genre_id, published_at, createdAt) {
        this.id = id;
        this.title = title;
        this.author_id = author_id;
        this.genre_id = genre_id;
        this.published_at = published_at;
        this.createdAt = createdAt;
    }
}

module.exports = Book;