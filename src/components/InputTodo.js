import React, { Component } from 'react';
import { DisplayTodo } from './DisplayTodo';
import App from '../App';


export class InputTodo extends Component
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
        return(
            <form onSubmit={this.handleSubmit}>
                <input type = "text" value={this.state.value} onChange={this.handleChange}></input>
                <input type = "submit" value = "Submit"></input>
            </form>
        );
    }
}

