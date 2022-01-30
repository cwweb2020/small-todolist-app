import React, { useEffect, useState } from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImBin2 } from 'react-icons/im';
import { Button } from "./styledComp/Button";
import { Section } from "./styledComp/Section";
import { Form } from "./styledComp/Form";
import { Heading } from "./styledComp/Heading";



  const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("task");
    if (localStorageData) {
      return JSON.parse(localStorageData);
    }else {
      return [];
    }
  }

function App() {
  const [task, setTask] = useState("");
  const [arrTask, setArrTask] = useState(getLocalStorage());

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    setArrTask([...arrTask, task]);
     e.target.reset();
    
  }
  const handleDelete = (item) => {
   setArrTask(arrTask.filter(i => i !== item));
   console.log(item);
  }

  // add to local storage

  useEffect(() => {

      localStorage.setItem("task", JSON.stringify(arrTask));
     
  }, [arrTask])



  return (
    <>
      <Section bgc="rgba(0, 0, 255, 0.041)"> 
        <Heading fs="1.7rem">enter task</Heading>
        <Form w="35%" className="form-control" onSubmit={handleSubmit}> 
          <input
            type="text"
            name="task"
            onChange={handleTask}
            placeholder="Task"
            className="form-control"
          />
           <Button bc="teal" m="20px 0 0 0" type="submit">
              Add Task
           </Button>
         
          </Form>
        <div className="container">
          <ul>
          {arrTask.length > 0 ? arrTask.map((item, index) => (
              <li className="my-3 text-capitalize fs-5" key={index}>{item} - <ImBin2 onClick={() => handleDelete(item)} /> </li>
            )) : null}
 
          </ul>
        </div>
        </Section>
    </>
  );
}

export default App;
