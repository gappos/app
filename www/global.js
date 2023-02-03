const headers = new Headers();
headers.append('content-type', 'application/json');

const result = await fetch('http://78.56.77.77:3000/graphql', {
  method: 'POST',
  headers,
  body: JSON.stringify({ query: '{books{title,author}}' })
}).then(response => response.json());

export const books = result?.data?.books;
