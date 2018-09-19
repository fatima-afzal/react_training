import React, { Component } from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export class DisplayTodoComplete extends Component{
 
    render()
    {       
       return(  
        
        <div className="Todo-left">
        <h3>Complete Tasks</h3>
        <TodoList value={this.props.value}></TodoList>  
        <p>{this.props.value.length} items left</p>     
        </div>
        
       );
    }
}

function ListItem(props) {
    
    return <li>{props.value}</li>;
  }
  
function TodoList(props) {
    const todo = props.value;
    const listItems = todo.map((todo) =>
      
      <ListItem key={todo}
                value={todo} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }