import React from 'react'
import {Button,Card} from 'react-bootstrap';
import './Style.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import './App.css'
        
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

}));

export default function Contactus() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        
        <TextField
          id="standard-textarea"
          label="User Name"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="standard-textarea"
          label="Email Id"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="standard-textarea"
          label="Your Query"
          placeholder="Placeholder"
          multiline
        />
        <br/>
        <Button className="btn-light text-warning"> Submit</Button>
      </div>
      
    </form>
  );
}

   
