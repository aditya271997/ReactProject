import React, {useState} from 'react'
import './Style2.css'
import Todolist from './Todolist'
import Footer from './Footer'

const Todo = () => {

const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);

 const itemEvent = (event) => {
  setInputList(event.target.value);

};
const listItems = () => {
	setItems((oldItems) => {
	 return[...oldItems, inputList];
})
setInputList("");
};

const deleteItem = (id) => {
	setItems((oldItems) => {
    return oldItems.filter((arrElem, index) => {
       return index !== id;
})
})
};

	return(
	<div>
    <div  className="main_div mt-3">
    	<br/>
    	<br/>
    	<div className="center_div">
    		<br/>
    		<h1 className="text">ToDo List</h1>
    		<br/>
    		<input type="text" placeholder='Add Task' value={inputList} onChange={itemEvent}  className="in"/>
    		<button className="but" onClick={listItems}><span className="sp"> + </span> </button>
    		<ol className="ol">
    			{
    			 Items.map((itemval, index) => {
    			 return <Todolist key={index} id={index} onSelect={deleteItem} text={itemval} />;
    			})
    			}
    		</ol>
    	</div>
    	</div>
    	<Footer />
    </div>
	)
}
export default Todo;