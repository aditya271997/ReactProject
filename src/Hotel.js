import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Coffeecup} from './Services'
import {Row, Col} from 'react-bootstrap';

import dalgona from "./dalgona.jpg"
import capa from "./capa.jpg"
import cold from "./cold.jpg"
import coldcoffee from "./coldcoffee.jpg"
import black from "./black.jpg"
import americano from "./americano.jpg"
import latte from "./latte.jpg"
import mocha from "./mocha.jpg"

import Footer from './Footer'



export default class Hotel extends React.Component
{
  constructor()
    {
        super();
        this.state={
         list:[
             {name:'Cappuccino', image:mocha , email:'adi@gmail.com'},
             {name:'Dalgona Coffee', image:'dalgona.jpg' , email:'adi@gmail.com'},
             {name:'Cold Coffee', image:'cold.jpg' , email:'adi@gmail.com'},
        
         ]
        }
    }
 render(){

    return(
        <div>
        <br/>
        <br/>
 <h1 className="text-center mt-5"> COFFEE <span className="text-warning">DELIGHT</span></h1>
     {
     this.state.list.map((item)=>(
     <div>
      
     <Row className="show-grid mt-5 mb-5">

      <Col xs={12} sm={3} className="wrapper mt-3">
    <Card>
      <CardActionArea>
        <CardMedia>
         <img src={item.image} style={{height:"150px",width:"245px"}}/>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="outlined" color="primary" >
        $12
        </Button>
         <Button variant="contained" color="primary">
        Oder Now
      </Button>
      </CardActions>
    </Card>
  </Col>
</Row>
 </div>

 )
 )
}

    </div>
    
)
}
}