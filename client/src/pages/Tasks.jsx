import React,{useEffect, useState} from 'react'
import Task from './Task';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAdd,faFilter } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [query, setQuery] = useState(" ");

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
    }, [tasks])


  return (
    <div className="container App">

      <br /><br />
      <h1>TaskFlow</h1>
      <br /><br />

      <>
        <div className="row py-4">
          <div className="col">
            <input 
              placeholder="Search"
              type="text"
              onChange={(e)=>setQuery(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success mx-2">
              <FontAwesomeIcon icon={faFilter} />
            </button>
            <button className="btn btn-lg btn-success">
              <Link className="custom-link" to="/add">
                <FontAwesomeIcon icon={faAdd} />
              </Link>
            </button>
          </div>
        </div>
      </>

      {tasks && tasks.length ? "" : "No tasks found..."}

      <>
        {tasks.filter((task)=>task.description.toLowerCase().includes(query.toLowerCase())).map((task)=>(
          <Task task={task} key={task.id}/>
        ))}
      </>
    </div>
  )
}

export default Tasks
