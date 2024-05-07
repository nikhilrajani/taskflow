import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { IoAddCircleSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res=await axios.get("http://localhost:8800/tasks");
                setTasks(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTasks();
    }, [])
    
  return (
    <div>
      <h1>TaskFlow</h1>
      <div className="tasks">
        {tasks.map((task)=>(
            <div className="task" key={task.id}>
                <h2>{task.description}</h2>
                <p>Priority: {task.priority}</p>
                <p>Due: {task.dueDate}</p>
            </div>
        ))}
      </div>

      <div className="add">
        <button>
            <Link to="/add">
                <IoAddCircleSharp />
                <p>Add Task</p>
            </Link>
        </button>
      </div>
    </div>
  )
}

export default Tasks
