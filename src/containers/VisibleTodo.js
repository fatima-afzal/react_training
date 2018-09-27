import { connect } from 'react-redux'
import {TodoList} from '../components/TodoList'
import {clickTodo} from '../actions'


const getIncompleteTodos = (todos) =>
{
    return todos.filter(t => !t.completed)
}

const getCompleteTodos = (todos) =>
{
    return todos.filter(t => t.completed)
}

const mapStateToProps = state => ({
  todosIncomplete : getIncompleteTodos(state.todos),
  todosComplete : getCompleteTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
    clickTodo: id => dispatch(clickTodo(id))
  })
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)