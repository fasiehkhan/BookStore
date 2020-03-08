import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddButton from '../components/AddButton'


const useStyles = makeStyles(theme => ({
  card: {
    width: 'auto', height: '440px',
    position: 'relative', 
    top: '55px', left: '280px'
  },
  media: {
    height: 250,
    paddingTop: '56.25%', // 16:9
  },
}));

const Item = function(props) {
  const classes = useStyles();
  

  return (
    <div>  
    <Card className={classes.card}>            
          <CardMedia
            className={classes.media}
            image={props.img}
          />
          <CardContent>
           <Typography variant="body1" color="textSecondary" component="p">
              Title: {props.book}            
            </Typography>

           <Typography variant="body4" color="textSecondary" component="p">
              Price: {props.price}
            </Typography>
            <AddButton AddButton={props.func} />

          </CardContent>
        </Card>

</div>
  );
}


export default Item;