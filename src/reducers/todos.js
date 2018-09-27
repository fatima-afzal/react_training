const todos = (state = [],action) =>
{
    switch(action.type)
    {
        
        case 'ADD_TODO' :
        
            return            [
                ...state,
                {
                  id: action.id,
                  text: action.text,
                  completed: false,
                }
              ]
        

        case 'CLICK_TODO' :
        
            return state.map(todo => 
                {
                    return (todo.id === action.id) ?
                    ({...todo, completed: !todo.completed})
                    :
                    todo 
                })
        
        default :
        return state 
    }
}

export default todos ;