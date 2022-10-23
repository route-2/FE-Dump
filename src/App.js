import React, {useState} from "react"
import ToDoList from "./ToDoList";
const App=()=> {
 const [inputList,setInputList]=useState();
 const[Items,setItems] = useState([]);
 const itemEvent = (event) => {
   setInputList(event.target.value);
 };
 const ListOfItems=()=> {
 setItems((olditems) => {
   return [...olditems, inputList];
 })
 setInputList("");

 }
return ( 
<>
<div className="main_div"> 
<div className="center_div"> 
<br/>

  <h1> ToDo List </h1> 
  <br/>
<input type='text' placeholder="add ⬇️" 
value={inputList} onChange={itemEvent}/>
<button onClick={ListOfItems}> + </button>
 
<div> 
<ul className="list"> 
{Items.map((itemval) => {
  return <ToDoList text = {itemval} />;
})} 
</ul>
</div>

</div>
</div>
</>
)
};
export default App;