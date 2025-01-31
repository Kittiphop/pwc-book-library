const express = require('express');
const router = express.Router();
const bookController = require('../controller/book');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 *  /books:
 *    post:
 *      summary: Add a new book
 *      tags: [Books]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                author_id:
 *                  type: number
 *                genre_id:
 *                  type: number
 *                published_at:
 *                  type: string
 *                  format: date
 *      responses:
 *        "201":
 *          description: Created
 *          content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   title:
 *                     type: string
 *                   author_id:
 *                     type: number
 *                   genre_id:
 *                     type: number
 *                   published_at:
 *                     type: string
 *                     format: date
 *                   created_at:
 *                     type: string
 *                     format: date
 *        "500":
 *          description: Internal Server Error
 */
router.post('', bookController.createBook);

/**
 * @swagger
 *  /books/{id}:
 *    put:
 *      summary: Update a book
 *      tags: [Books]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: The book ID
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: number
 *                title:
 *                  type: string
 *                author_id:
 *                  type: number
 *                genre_id:
 *                  type: number
 *                published_at:
 *                  type: string
 *                  format: date
 *      responses:
 *        "200":
 *          description: Updated
 *          content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   title:
 *                     type: string
 *                   author_id:
 *                     type: number
 *                   genre_id:
 *                     type: number
 *                   published_at:
 *                     type: string
 *                     format: date
 *                   created_at:
 *                     type: string
 *                     format: date
 *        "500":
 *          description: Internal Server Error
 */
router.put('', bookController.updateBook);

/**
 * @swagger
 *  /books/{id}:
 *    delete:
 *      summary: Delete a book
 *      tags: [Books]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: The book id
 *          schema:
 *            type: string
 *      responses:
 *        "204":
 *          description: Deleted
 *        "500":
 *          description: Internal Server Error
 */

router.delete('/:id', bookController.deleteBook);

/**
 * @swagger
 *  /books/{id}:
 *    get:
 *      summary: Get a book by id
 *      tags: [Books]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: The book id
 *          schema:
 *            type: string
 *      responses:
 *        "200":
 *          description: Book details
 *          content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   title:
 *                     type: string
 *                   author_id:
 *                     type: number
 *                   genre_id:
 *                     type: number
 *                   published_at:
 *                     type: string
 *                     format: date
 *                   created_at:
 *                     type: string
 *                     format: date
 *        "404":
 *          description: Not Found
 *        "500":
 *          description: Internal Server Error
 */
router.get('/:id', bookController.getBookById);

/**
 * @swagger
 *  /books:
 *    get:
 *      summary: Search for books
 *      tags: [Books]
 *      parameters:
 *        - name: title
 *          in: query
 *          required: false
 *          description: Title of the book
 *          schema:
 *            type: string
 *        - name: author
 *          in: query
 *          required: false
 *          description: Author of the book
 *          schema:
 *            type: string
 *        - name: genre
 *          in: query
 *          required: false
 *          description: Genre of the book
 *          schema:
 *            type: string
 *      responses:
 *        "200":
 *          description: List of books
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: number
 *                      title:
 *                        type: string
 *                      author_id:
 *                        type: number
 *                      genre_id:
 *                        type: number
 *                      published_at:
 *                        type: string
 *                        format: date
 *                      created_at:
 *                        type: string
 *                        format: date
 *        "500":
 *          description: Internal Server Error
 */
router.get('/', bookController.searchBooks);

module.exports = router;