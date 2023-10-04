
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, settodolist] = useState([]);
  function additem(){
    if(inputText!=="")
    settodolist([...todolist, inputText]);
    setInputText("")
  }
  function deleteItem(index){
       let temparr = [...todolist];
       temparr.splice(index,1);
       settodolist([...temparr])
  }
  return (
    <div className="mainCotainer">
        {/* Do not remove the main div */}
        <div className="inputContainer">
          <h1>To-Do-List</h1>
          <input type="text" onChange={e=>setInputText(e.target.value)} value={inputText}/>
          <button onClick={additem}>Add Todo</button>
        </div>
        <div className="listContainer">
          <ul>
            {
              todolist.map((item, index)=>{
                return (
                 <li key={index} id={index}>
                  <h3>{item}</h3>
                  <button onClick={deleteItem}>Delete</button>
                 </li>
                )
              })
            }

          </ul>
        </div>
         
      
    </div>
  )
}

export default App
