require('dotenv').config();
const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();

const db=mysql.createConnection({
    host: "localhost",
    user:"root",
    password:process.env.MYSQL_ROOT_PASSWORD,
    database:"test"
});

app.use(express.json());
app.use(cors());

db.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to MySQL Server!');
    }
})

app.get("/",(req,res)=>{
    res.json("Hello, this is the backend")
})

app.get("/tasks",(req,res)=>{
    const q="SELECT * FROM tasks"

    db.query(q,(err,data)=>{
        if(err){
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})

app.post("/tasks",(req,res)=>{
    const q="INSERT INTO tasks (`description`,`priority`,`dueDate`)VALUES (?)"

    const values=[
        req.body.description,
        req.body.priority,
        req.body.dueDate
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Task has been added successfully!");
    })
})

app.delete("/tasks/:id",(req,res)=>{
    const taskId=req.params.id;
    const q="DELETE FROM tasks WHERE id=?";

    db.query(q,[taskId],(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json("Task Deleted Successfully!")
        }
    })
})

app.put("/tasks/:id",(req,res)=>{
    const taskId=req.params.id;
    const q="UPDATE tasks SET `description`=?, `priority`=?, `dueDate`=? WHERE id=?";

    const values=[
        req.body.description,
        req.body.priority,
        req.body.dueDate,
    ]

    db.query(q,[...values,taskId],(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json("Task updated Successfully!")
        }
    })
})

app.listen(8800,()=>{
    console.log('Connected to backend! Listening on port 8800!');
})