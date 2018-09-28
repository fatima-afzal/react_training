import { connect } from 'react-redux'
import {TodoList} from '../components/TodoList'
import {updateData} from '../actions'
import {updateTodoSuccess} from '../actions/index'

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
    updateTodo : (id,{text,completed}) => updateData(id,{text,completed}).then(json => dispatch(updateTodoSuccess(json))),

  })
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)