import React, { Component } from 'react';
import {InputTodo} from "./components/InputTodo"
import {DisplayTodo} from "./components/DisplayTodo"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      todo : ["play tennis", 'play circuit', 'play squash', 'rowing']
    }
  }

 onChange(value)
 {
  this.setState({ todo : [...this.state.todo,value]});
 } 
  render() {
   const todo = this.state.todo;
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          
        <h1 className="App-intro">
          Todos
        </h1>
        <InputTodo onChange={this.onChange.bind(this)}></InputTodo>
        <DisplayTodo value={todo}></DisplayTodo>
        
      </div>
    );
  }
}

export default App;
