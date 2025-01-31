# pwc-book-library

This is a RESTful API for managing a bank's library system, built with Node.js and PostgreSQL. It allows users to add, update, delete, and search for books in the library.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Features

- Add a new book
- Update existing book details
- Delete a book
- Retrieve book details by ID
- Search for books based on title or author

## Technology Stack

- Node.js
- Express.js
- PostgreSQL
- Swagger (for API documentation)

## Installation

1. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node src/app.js
   ```
   The API will run on `http://localhost:3000`.

2. The Swagger UI for API documentation run on `http://localhost:3000/api-docs`.

## API Documentation

The following endpoints are available:

### 1. Add a New Book

- **Endpoint:** `POST /books`
- **Request Body:**
 ```json
 {
   "title": "string",
   "author_id": "int",
   "genre_id": "int",
   "published_at": "date"
 }
 ```

### 2. Update a Book

- **Endpoint:** `PUT /books/{id}`
- **Request Body:**
 ```json
 {
   "id": "int",
   "title": "string",
   "author_id": "int",
   "genre_id": "int",
   "published_at": "date"
 }
 ```

### 3. Delete a Book

- **Endpoint:** `DELETE /books/{id}`

### 4. Get a Book by ID

- **Endpoint:** `GET /books/{id}`
- **Response Body:**
 ```json
 {
   "id": "int",
   "title": "string",
   "author_id": "int",
   "author_name": "string",
   "genre_id": "int",
   "genre_name": "string",
   "published_at": "date",
   "create": "date"
 }
 ```

### 5. Search for Books

- **Endpoint:** `GET /books?title={title}&author={author}`
- **Response Body:**
 ```json
 [
    {
        "id": "int",
        "title": "string",
        "author_id": "int",
        "author_name": "string",
        "genre_id": "int",
        "genre_name": "string",
        "published_at": "date",
        "create": "date"
    }
 ]
 ```
