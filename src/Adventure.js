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


 export function Sign({history})
  {
    const testSign = () => 
    {
        history.push('/signup')
    }
    return(
    <div>
      <div className="main_div" style={{marginTop:"30px",marginBottom:"30px"}}>
         <div className="">


        
      <Card border="warning" style={{ width: '18rem',borderRadius: "0px 50px 0px 50px",boxShadow: "5px 5px 25px -5px rgba(0,0,0,0.2)"}}>
    <Card.Header className="text-center" style={{ borderRadius: "0px 50px 0px 0px"}} >
      <FontAwesomeIcon icon={faUserCircle}  style={{fontSize:"55px"}} className="text-warning " />
    </Card.Header>
    <Card.Body>
      <Card.Title className="mb-4 text-center">Sign-In</Card.Title>
      <Card.Text className="text-center">
       <TextField
          required
          id="outlined-required"
          label="User Name"
          defaultValue="hello"
          variant="outlined"
          />
       </Card.Text>
     
      <Card.Text className="text-center">
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="******"
          variant="outlined"
          className="text-center"
          borderColor="warning"
        />
       </Card.Text>
       <Card.Text className="text-center">
        <Button className="btn-warning text-dark">Login</Button>
    </Card.Text>

    </Card.Body>
    <Card.Footer className="text-center" style={{ borderRadius: "0px 0px 0px 50px"}}>
      
       <Button variant="warning"  onClick={testSign}>Create Account</Button>  
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
export default withRouter (Sign);  
   