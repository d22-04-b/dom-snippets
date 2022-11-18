# Integration Demo

Integration means: 
- Outsource your data (usually all arrays in your program) to a backend
- Connect / integrate the backend using the "fetch" function

Create a backend which stores data with zero code using JSON SERVER package:

`npm init -y`
`npm install json-server`

Start backend in terminal:

`npm run backend`

Start frontend in another terminal:

`live-server`

## Fetch

Fetch is a builtin function in the browser.

We can use it to EXCHANGE data with a backend.

`fetch( backendUrl )` (e.g. fetch('http://localhost:5000/todos'))

More examples on how to use fetch in your UI for doing backend operations (add, update, delete data):

https://github.com/losrobbos/api-connect-guide
