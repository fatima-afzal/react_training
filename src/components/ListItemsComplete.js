import React from 'react'
import {ViewItems} from './ViewItems'

export const ListItemsComplete = ({ updateTodo, todosComplete } ) =>   
(      
  <ul>
      {todosComplete.map((todo) => 
        <ViewItems
          key={todo.id}
          {...todo}   
          onClick={() => updateTodo(todo.id, {text : todo.text , completed: !todo.completed})}
        />              
      )}
  </ul>           
)
    