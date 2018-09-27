import React from 'react'
import {ViewItems} from './ViewItems'

export const ListItemsComplete = ({ clickTodo, todosComplete  } ) =>   
(      
  <ul>
      {todosComplete.map((todo) => 
        <ViewItems
          key={todo.id}
          {...todo}   
          onClick={() => clickTodo(todo.id)} 
        />              
      )}
  </ul>           
)
    