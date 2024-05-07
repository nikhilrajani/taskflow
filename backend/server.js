const express=require('express');
const mysql=require('mysql');
const app=express();

const db=mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Nik.Raj9003",
    database:"test"
});

app.use(express.json());

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

app.listen(8800,()=>{
    console.log('Connected to backend! Listening on port 8800!');
})