import React, { Component } from 'react';


export class DisplayTodo extends Component{
   constructor(props)
   {
       super(props);
     
   }

    render()
    {       
       return(  
        <div>
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
  
  