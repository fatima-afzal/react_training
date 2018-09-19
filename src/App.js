import React, { Component } from 'react';
import InputTodo from "./components/InputTodo"
import DisplayTodoIncomplete from "./components/DisplayTodoIncomplete"
import logo from './logo.svg';
import './App.css';
import { DisplayTodoComplete } from './components/DisplayTodoComplete';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
h2 : {
  color: 'orange', 
  fontsize: 1,
  fontweight: 400,
  fontfamily: "Roboto",
  lineheight: 1.20588
},
});
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      todo : ["play tennis", 'play circuit', 'play squash', 'rowing'],
      todoComplete : []
    }
  }

 onChange(value)
 {
  this.setState({ todo : [...this.state.todo,value]});
 } 
 onClick(value)
 {
  this.setState({ todo : this.state.todo.filter(item => item !== value)});
   this.setState({todoComplete: [...this.state.todoComplete,value]});
 }
  render() {
   const todo = this.state.todo;
   const todoComplete =this.state.todoComplete;
   const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          
        <h1 className={classes.h2}>
          Todos
        </h1>
        <InputTodo onChange={this.onChange.bind(this)}></InputTodo>
        <DisplayTodoIncomplete value={todo} onClick={this.onClick.bind(this)}></DisplayTodoIncomplete>
        <DisplayTodoComplete value={todoComplete}></DisplayTodoComplete>
        
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

