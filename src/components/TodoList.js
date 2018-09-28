import React from 'react'
import {ListItemsComplete} from './ListItemsComplete'
import {ListItemsIncomplete} from './ListItemsIncomplete'

export const TodoList = ({ todosIncomplete, updateTodo, todosComplete } ) =>
(  
    <div style = {{ marginLeft : '35%', overflow : 'hidden', border : '50%'}}>
        <div style = {{ float : 'left'}} >
            <h3>Completed Tasks</h3>  
                <ListItemsComplete
                     todosComplete = {todosComplete} updateTodo={updateTodo} 
                />                                  
        </div>
        <div style = {{marginLeft : '20%',overflow : 'hidden'}}>
            <h3>Incomplete Tasks</h3>        
                <ListItemsIncomplete
                    todosIncomplete = {todosIncomplete} updateTodo={updateTodo} 
                />                          
        </div>
    </div>
)


  
