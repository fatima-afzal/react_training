import React from 'react'
import VisibleTodo from '../containers/VisibleTodo';
import AddTodo from '../containers/AddTodo'

const App = () => (
  <div>
    <AddTodo /> 
    <br></br>
    <VisibleTodo></VisibleTodo>
  </div>
)

export default App