import { connect } from 'react-redux'
import InputTodo from '../components/InputTodo'
import { postData} from '../actions'
import { addTodoSuccess } from '../actions'

  const mapDispatchToProps = dispatch => ({
      postTodo: input => postData(input).then(json => dispatch(addTodoSuccess(json)))
    })
    
  export default connect(
    null,mapDispatchToProps
  )(InputTodo)