

const todos = (state = [],action) =>
{
    switch(action.type)
    {
        
        case 'ADD_TODO_SUCCESS' :
        
            return           [
                ...state,
                {
                  id: action.todo.id,
                  text: action.todo.text,
                  completed: false,
                }
              ] 
        

        case 'UPDATE_TODO_SUCCESS' :
        
            return state.map(todos => 
                {
                    return (todos.id === action.todo.id) ? 
                    ({...todos, completed: !todos.completed})
                    :
                    todos 
                })
        
        
        case 'FETCH_TODOS_SUCCESS' :
            return [...action.todos]

            
        default :
        return state 
    }
}

export default todos ;