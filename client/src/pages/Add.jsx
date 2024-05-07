import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    const [task, setTask] = useState({
        description:"",
        priority:"",
        dueDate:"",
    });

    const navi=useNavigate();

    const handleChange = (e) => {
        setTask(prev=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/tasks",task);
            navi("/");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="form">
        <h1>Add new Task</h1>
        <input type="text" placeholder="description" onChange={handleChange} name="description"/>
        <input type="text" placeholder="priority" onChange={handleChange} name="priority" />
        <input type="date" placeholder="dueDate" onChange={handleChange} name="dueDate"/>

        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Add
