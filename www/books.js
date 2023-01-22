import { books } from './global.js';

const list = document.getElementById('books');

Array.isArray(books) &&
  books.forEach(({ title, author }) => {
    const _title = document.createElement('h4');
    _title.className += 'item item-title';
    _title.innerHTML = title;
    list.appendChild(_title);
    const _author = document.createElement('p');
    _author.className = 'item item-para';
    _author.innerHTML = 'by ' + author;
    list.appendChild(_author);
  });
