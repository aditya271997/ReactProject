import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const Todolist = (props) => {

	return(
	<div className="icon">
    <FontAwesomeIcon icon={faTimesCircle}  style={{fontSize:"15px"}} className="icont" onClick={() => {
    	props.onSelect(props.id);
    }}/>
	<li> {props.text} </li>
	</div>
	);
};
export default Todolist;