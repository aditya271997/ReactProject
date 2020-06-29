import React from 'react'
import {Button,Card,Row,Col} from 'react-bootstrap';
import './Style.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '27ch',
    },
  },
}))


export default function Sign() {
  const classes = useStyles();
  return (
    <div>
      <Row className="container mt-">
         <Col xs={12} sm={5} className="mt-5">
       </Col>


        <Col sm={6} className="mt-5">
      <Card border="warning" style={{ width: '18rem',marginTop:"100px"}}>
    <Card.Header className="text-center">
    	<FontAwesomeIcon icon={faUserCircle}  style={{fontSize:"55px"}} className="text-warning " />
    </Card.Header>
    <Card.Body>
      <Card.Title className="mb-4 text-center">Sign-In</Card.Title>
      <Card.Text>
       <TextField
          required
          id="outlined-required"
          label="User Name"
          defaultValue="hello"
          variant="outlined"
          color="warning"
        
        />
      </Card.Text>
      <Card.Text>
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="******"
          variant="outlined"
          color="warning"
        />
       </Card.Text>
       <Card.Text className="text-center">
        <Button className="btn-warning text-dark"> Submit</Button>
    </Card.Text>
    </Card.Body>
  </Card>

</Col>
 
 
      </Row>
    </div>
)

}
   