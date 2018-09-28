import React from 'react'
import {ViewItems} from './ViewItems'


export const ListItemsIncomplete = ({ updateTodo, todosIncomplete } ) =>
(     
  <ul>
      {todosIncomplete.map((todo) => 
        <ViewItems
          key={todo.id}
          {...todo}   
          onClick={() => updateTodo(todo.id, {text : todo.text , completed: !todo.completed})} 
        />              
      )}
  </ul>           
)
 
