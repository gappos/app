const headers = new Headers();
headers.append('content-type', 'application/json');



export async function setLocalStorage(key, value) {
  // expiry check to be added
  const now = new Date();
  const item = await {
    value: value,
    // expiry: now.getTime() + expiry
  }
  await localStorage.setItem(key, JSON.stringify(item));
}

let booksObj


export async function getBooks(key) {
  // expiry check to be added
  const itemStr = await localStorage.getItem(key);
  if (!itemStr) {
    const result = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: '{books{title,author}}' })
    }).then(response => response.json());
    booksObj = result.data.books
    setLocalStorage("books", booksObj)
    return booksObj} else {
      booksObj = await JSON.parse(window.localStorage.getItem('books'));
      return booksObj.value
    }
}

export const books = await getBooks("books");
