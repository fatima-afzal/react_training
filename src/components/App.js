import React, { Component } from 'react'
import VisibleTodo from '../containers/VisibleTodo';
import AddTodo from '../containers/AddTodo'
import { fetchTodos } from '../actions';
import { connect } from "react-redux";

class App extends Component
{
 
  componentDidMount()
  {
    this.props.dispatch(fetchTodos())
  }

  render()
  {
  
   return  <div>    
    <AddTodo /> 
    <br></br>
    <VisibleTodo></VisibleTodo>
  </div>
  
}
}

export default connect() (App)
