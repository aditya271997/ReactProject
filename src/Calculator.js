import React from 'react'

import {Button,Card,Row,Col} from 'react-bootstrap';
import './Style.css'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import './Style2.css'
import Footer from './Footer'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '28ch',
         },
  },
}))


 export default class Calculator extends React.Component
  {
  	constructor()
  	{
  		super()
  		this.state={
  			height:null,
  	    	weight:null,
  	     	bmi:'',
     	}
  	}
   
	handleSubmit = (event) => {
	    const h = this.state.height;
	    const w = this.state.weight;
	    let result;
	    result = w/(h*h);
         this.setState({
         bmi:result
     })
	}
  	render()
  	{
    
        return(
    <div>
      <div className="main_div" style={{marginTop:"30px",marginBottom:"30px"}}>
         <div className="">

     <Card border="warning" style={{ width: '18rem',borderRadius: "0px 50px 0px 50px",boxShadow: "5px 5px 25px -5px rgba(0,0,0,0.2)"}}>
    <Card.Header className="text-center" style={{ borderRadius: "0px 50px 0px 0px"}} >
      <FontAwesomeIcon icon={faUserCircle}  style={{fontSize:"55px"}} className="text-warning " />
    </Card.Header>
    <Card.Body>
      <Card.Title className="mb-4 text-center">BMI Calculator</Card.Title>
      <Card.Text className="text-center">
       <TextField
          required
          id="outlined-required"
          label="Height"
          
          variant="outlined"
           name="height"
           value={this.state.height}
          onChange={(event)=> this.setState({height:event.target.value})}
          />
       </Card.Text>
     
      <Card.Text className="text-center">
        <TextField
          required
          id="outlined-required"
          label="Weight"
          
          variant="outlined"
          className="text-center"
          borderColor="warning"
          name="weight"
          value={this.state.weight}
          onChange={(event)=> this.setState({weight:event.target.value})}
        />
       </Card.Text>
       
       <Card.Text className="text-center">
        <TextField
          required
          id="outlined-required"
          label="BMI value"
          
          variant="outlined"
          className="text-center"
          borderColor="warning"
          name="bmi"
          value={` ${this.state.bmi}`}
          disable={true}
        />
       </Card.Text>

    </Card.Body>
    <Card.Footer className="text-center" style={{ borderRadius: "0px 0px 0px 50px"}}>
      
       <Button variant="warning" onClick={()=>{this.handleSubmit()}}>Create  BMI Value </Button>  
    </Card.Footer>
  </Card>

</div>
</div>

<br/>
<br/>
<Footer />
    </div>
)
}
}
 
