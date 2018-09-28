import fetch from 'cross-fetch'

export const addTodoSuccess = (todo) =>
(
{
    type : 'ADD_TODO_SUCCESS',
    todo
}
)
export const updateTodoSuccess = (todo) =>
(
{
    type : 'UPDATE_TODO_SUCCESS',
    todo
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
          dispatch(fetchTodosSuccess(json))     
        })
    }
  }
  
export function postData( data = {}) {
    return fetch(`http://localhost:3000/todos`, {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",   
        },
        redirect: "follow", 
        referrer: "no-referrer", 
        body: JSON.stringify(data), 
    })
    .then(response => response.json()) 
    
}

export function updateData(id, data ={}) {
  
  return fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json; charset=utf-8",   
      },
      redirect: "follow", 
      referrer: "no-referrer", 
      body: JSON.stringify(data), 
  })
  .then(response => response.json()) 
  
}

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

