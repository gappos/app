import { books } from './global.js';

const list = document.getElementById('books');
console.log(list);

books.forEach(({ title, author }) => {
  const book = document.createElement('div');
  book.classList = ['item'];
  book.innerHTML = `<h4 class="item-title">${title}</h4><p class="item-para">${author}</p>`;
  list.appendChild(book);
});
