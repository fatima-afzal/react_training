import { connect } from 'react-redux'
import InputTodo from '../components/InputTodo'
import {addTodo} from '../actions'


  const mapDispatchToProps = dispatch => ({
      addTodo: input => dispatch(addTodo(input))
    })
    
  export default connect(
    null,mapDispatchToProps
  )(InputTodo)