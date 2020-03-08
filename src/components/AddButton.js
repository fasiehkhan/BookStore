import React ,{ Component }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    '& > *': {
      left:'180px', top: '110px'
        },
  }
});


 export class AddButton extends Component{

    

  render(){

    //this render function displays the button 
    // the onClick below is accepting a prop from a parent component(Homepage)
    //the prop is a function which displays the book in shopping cart

    const { classes } = this.props;
    return (
    <div className={classes.root} onClick={this.props.AddButton}>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
 }



  export default (withStyles(styles)(AddButton));
  