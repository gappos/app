const headers = new Headers();
headers.append("content-type", "application/json");

import BooksState from "./states.js";
const booksState = new BooksState();

export const books = await booksState.getBooks("books");
