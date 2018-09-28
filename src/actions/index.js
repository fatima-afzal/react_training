import fetch from 'cross-fetch'

let nextTodoId = 0

export const addTodo = (text) =>
(
{
    type : 'ADD_TODO',
    id : nextTodoId++,
    text
}
)
export const clickTodo = (id) =>
(
{
    type : 'CLICK_TODO',
    id
}
)

export const fetchTodosSuccess = todos => ({
  type: 'FETCH_TODOS_SUCCESS',
  todos
})

export const fetchTodos = () => {
    return (dispatch) => {
      return fetch("http://localhost:3000/todos")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
        debugger
          dispatch(fetchTodosSuccess(json))     
        })
    }
  }
  
export function postData( data = {}) {
    return fetch(`http://localhost:3000/todos`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses response to JSON
}

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

