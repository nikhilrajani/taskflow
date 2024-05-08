import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan,faAdd
} from '@fortawesome/free-solid-svg-icons'


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
    
    const handleDelete = async (id) =>{
      try {
        await axios.delete("http://localhost:8800/tasks/"+id);
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    }

    const handleToggle = () => {
      console.log("isCompleted Toggle Button!")
    }

  return (
    <div className="container App">
      <br /><br />
      <h1>TaskFlow</h1>
      <br /><br />

      <>
        <div className="row taskBg">
          <div className="col-auto iconsWrap">
            <span>
              <Link className="custom-link" to="/add">
                <FontAwesomeIcon icon={faAdd} />
              </Link>
            </span>
          </div>
        </div>
      </>

      <div className="tasks">
        {tasks.map((task)=>(
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.isCompleted ? "done":""}>
                  <span className="taskText">{task.description}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    onClick={handleToggle}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {task.isCompleted ? null : (
                    <span>
                      <Link className="custom-link" to={`/update/${task.id}`}>
                        <FontAwesomeIcon icon={faPen} />
                      </Link>
                    </span>
                  )}
                  <span
                    onClick={()=>handleDelete(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
                <div>
                  <span className="taskText">Priority: {task.priority}</span>
                  <span className="taskText">Deadline: {task.dueDate}</span>
                </div>
              </div>
            </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Tasks
