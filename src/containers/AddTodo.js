import { connect } from 'react-redux'
import InputTodo from '../components/InputTodo'
import { postData} from '../actions'

  const mapDispatchToProps = dispatch => ({
      postTodo: input => postData(input)
    })
    
  export default connect(
    null,mapDispatchToProps
  )(InputTodo)