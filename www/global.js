const headers = new Headers();
headers.append('content-type', 'application/json');

const result = await fetch('http://localhost:3009/graphql', {
  method: 'POST',
  headers,
  body: JSON.stringify({ query: '{books{title,author}}' })
}).then(response => response.json());

export const books = result?.data?.books;
