/**
 * On startup of app
 * - load todo data / array from BACKEND
 * - convert array to DOM nodes
 * - display todo nodes
 * 
 */

const elTodos = document.querySelector(".todos")
const elAddTodo = document.querySelector(".todo-add");

// grab data from backend
const backendUrl = "http://localhost:5000/todos"

// make call to backend using fetch
// fetch goes OUTSIDE the browser => to another url and grabs the data from there
fetch(backendUrl)
.then( (result) => {
  console.log(result)

  // parse data out of response BODY (=body is the package of the data)
  const promiseData = result.json()
  console.log(promiseData)

  promiseData
  .then((todos) => {
    console.log(todos)

    // loop over data from backend and create DOM nodes
    todos.forEach(todo => {
      const divTodo = document.createElement("div")
      divTodo.innerText = todo.title

      // add todo html item to container
      elTodos.appendChild(divTodo)
    })

  })
})


elAddTodo.addEventListener("click", () => {

  fetch(backendUrl, {
    method: "POST", // POST => send data
    body: JSON.stringify({ title: "Noch einer" }),
    headers: {
      "Content-Type": "application/json" // tell backend that it is JSON that we are sending
    }
  })

})