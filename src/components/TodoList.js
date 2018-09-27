import React from 'react'
import {ListItemsComplete} from './ListItemsComplete'
import {ListItemsIncomplete} from './ListItemsIncomplete'

export const TodoList = ({ todosIncomplete, clickTodo, todosComplete  } ) =>
(  
    <div style = {{ marginLeft : '35%', overflow : 'hidden', border : '50%'}}>
        <div style = {{ float : 'left'}} >
            <h3>Completed Tasks</h3>  
                <ListItemsComplete
                     todosComplete = {todosComplete} clickTodo={clickTodo} 
                />                                  
        </div>
        <div style = {{marginLeft : '20%',overflow : 'hidden'}}>
            <h3>Incomplete Tasks</h3>        
                <ListItemsIncomplete
                    todosIncomplete = {todosIncomplete} clickTodo={clickTodo} 
                />                          
        </div>
    </div>
)


  
