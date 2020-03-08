import React, { Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddButton from '../components/AddButton'



const styles = theme => ({
  card: {
    width: 'auto', height: 440,
    position: 'relative', 
    top: '150px', left: '100px'
  },

  media: {
    height: 250, 
  },

//for mobile version: 
    ['@media (max-width: 1024px)']:{
      card: {
        width: 'auto', height: 340,
        position: 'left', 
        top: '120px',display:'block'
      },
      media: {
        height: 150, 
      },
    }
});

export class Price extends Component {

  render(){
    const { classes } = this.props;

  return (
    <div className="firstRow">
    <Card className={classes.card}>
      <CardMedia
            className={classes.media}>
      <img src={this.props.img} className="imgStyle"></img>
        </CardMedia>
        <AddButton AddButton={this.props.func} />
          <CardContent>
           <Typography   style={{top:'45px', position: 'relative'}}>
              Price: {this.props.price}
            </Typography>
          </CardContent>
        </Card>
</div>
  );
}
}

export default ((withStyles(styles)(Price)));


