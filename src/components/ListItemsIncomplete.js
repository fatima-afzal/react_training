import React from 'react'
import {ViewItems} from './ViewItems'

export const ListItemsIncomplete = ({ clickTodo, todosIncomplete  } ) =>
(     
  <ul>
      {todosIncomplete.map((todo) => 
        <ViewItems
          key={todo.id}
          {...todo}   
          onClick={() => clickTodo(todo.id)} 
        />              
      )}
  </ul>           
)
 
