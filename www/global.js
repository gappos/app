const headers = new Headers();
headers.append("content-type", "application/json");

export async function setLocalStorage(key, value, expiry) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + expiry,
  };
  await localStorage.setItem(key, JSON.stringify(item));
}

let booksObj;

export async function getBooks(key) {
  const itemStr = await localStorage.getItem(key);
  if (!itemStr) {
    try {
      const result = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query: "{books{title,author}}" }),
      }).then((response) => response.json());
      console.log(result);
      booksObj = result?.data?.books;
      setLocalStorage("books", booksObj, 10000);
      return booksObj;
    } catch (error) {
      document.getElementById(
        "books"
      ).innerHTML = `${error.message}. Please ensure API is running and try again.`;
    }
  } else {
    booksObj = await JSON.parse(window.localStorage.getItem("books"));
    const expiry = booksObj.expiry;
    if (new Date(expiry) < new Date().getTime()) {
      window.localStorage.clear();
      const result = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query: "{books{title,author}}" }),
      }).then((response) => response.json());
      booksObj = result?.data?.books;
      setLocalStorage("books", booksObj, 10000);
      return booksObj;
    } else {
      return booksObj.value;
    }
  }
}

export const books = await getBooks("books");
