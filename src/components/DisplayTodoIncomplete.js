import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class DisplayTodoIncomplete extends Component{
   
    render()
    {       
      
       return(  
        
        <div className="Todo-right">
        <h3>Incomplete Tasks</h3>
        <TodoList value={this.props.value} onClick={this.props.onClick}>
       </TodoList>  
        <p>{this.props.value.length} items left</p> 
            
        </div>
        
       );
    }
}

class TodoList extends Component {
  render()
  {
  const todo = this.props.value;
  const listItems = todo.map((todo) =>
    
    <ListItems key={todo}
              value={todo} onClick={this.props.onClick} />
             
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
  }
}


class ListItems extends Component {

  constructor(props)
  {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(event)
  {
    this.props.onClick(this.props.value);
  }
   render()
   {
    const { classes } = this.props;
    return <ListItemText primary={this.props.value} onMouseDown={this.onClick} />;
    
   }
  }
  
  DisplayTodoIncomplete.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(DisplayTodoIncomplete);

  