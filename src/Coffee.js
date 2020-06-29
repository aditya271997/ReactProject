import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Coffeecup} from './Services'
import {Row, Col} from 'react-bootstrap';
import './Style2.css'
import dalgona from "./dalgona.jpg"
import capa from "./capa.jpg"
import cold from "./cold.jpg"
import coldcoffee from "./coldcoffee.jpg"
import black from "./black.jpg"
import americano from "./americano.jpg"
import latte from "./latte.jpg"
import mocha from "./mocha.jpg"

import Footer from './Footer'
import { yellow } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    padding:5,
}
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor:yellow[500],
    '&:hover': {
      backgroundColor:yellow[700],
    },
  },
}))(Button);

export default function Coffee() {
  const classes = useStyles();

  return (
  <div>
    <br/>
    <br/>
    <Coffeecup/>
    <br/>
     <h1 className="text-center mt-5"> COFFEE <span className="text-warning">DELIGHT</span></h1>
     <p className="text-center text-muted mb-5"><i> Makes You Refresh With Every Sip</i></p>
     
     <div className="container">
     <Row className="show-grid mt-5 mb-5 ">

      <Col xs={12} sm={3} className="wrapper mt-3">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={capa} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cappuccino
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $12
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>

  <Col xs={12} sm={3} className="wrapper mt-3">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={dalgona} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dalgona Coffee
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Korean coffee drink taking the internet by storm, dalgona coffee is like a cappucino turned on its head, with the frothy coffee on top and the milk underneath.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $15
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>

  <Col xs={12} sm={3} className="wrapper mt-3">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={cold} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cold Coffee
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division being cold coffee, yielding a different flavor.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $15
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>

  <Col xs={12} sm={3} className="wrapper mt-3">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={coldcoffee} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ice Tea
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $15
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>

  <Col xs={12} sm={3} className="wrapper mt-5">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={black} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Black Tea
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $15
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>

  <Col xs={12} sm={3} className="wrapper mt-5">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={americano} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Americano Coffee
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $15
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>

  <Col xs={12} sm={3} className="wrapper mt-5">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={latte} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Latte
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $15
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>
  
   <Col xs={12} sm={3} className="wrapper mt-5">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>
         <img src={mocha} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mocha
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $15
        </Button>
         <ColorButton variant="contained" color="primary" className={classes.margin}>
        Oder Now
      </ColorButton>
      </CardActions>
    </Card>
  </Col>

</Row>
</div>
<br/>
<br/>
<Footer/>


  </div>
  );
}