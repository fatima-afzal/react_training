
import React from 'react'

 const InputTodo = ({postTodo}) =>
{
    let input
    return(
    <div>
        <h1 style={{
      color : 'orange', 
      fontsize: 1,
      fontweight: 400,
      fontfamily: "Roboto",
      lineheight: 1.20588,
      marginLeft : '40%'}
    }>Todo Application</h1>
    <br></br>
    <div style = {{ marginLeft : '40%', overflow : 'hidden', border : '50px'}}>
    <form onSubmit={e => {
        e.preventDefault()       
        if (!input.value.trim()) {
          return
        }
        postTodo({text : input.value})
        input.value = ''
      }}>    
   <input ref={node => input = node}/>    
         <button type='submit'>Submit</button>  
        </form>  
        </div>  
        </div>          
    )
}
export default (InputTodo);

