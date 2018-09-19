import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { DisplayTodoIncomplete } from './DisplayTodoIncomplete';
import App from '../App';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    
    button: {
      margin: theme.spacing.unit,
      variant : "outlined", 
      color : "primary"
      
      
    },
    input: {
      display: 'none',
    },   
        container: {
          display: 'block',
          flexWrap: 'wrap',
          margin : 'auto'
        },
        formControl: {
          margin: theme.spacing.unit,
        },
     
  });

class InputTodo extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            value : "",
         
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e)
    {
         this.setState({ value : e.target.value});
    }

    handleSubmit(event) {  
        this.props.onChange(this.state.value);
        event.preventDefault();
      }

    render()
    {
        const { classes } = this.props;
        return(
            <div className={classes.container} onSubmit={this.handleSubmit}>
            <form>
        <FormControl className={classes.formControl} >
          <InputLabel htmlFor="name-simple">New Task</InputLabel>
          <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />    
                <Button className={classes.button} type = "submit" >
       Submit
      </Button>
      </FormControl>
      </form>
            </div>
        );
    }
}

InputTodo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(InputTodo);

