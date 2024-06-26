import express from "express";

const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>")
})
app.get("/about", (req, res)=>{
    res.send("<h1>About Me</h1><p>My name is Robot</p>")
})
app.get("/contact", (req, res)=>{
    res.send("<h1>About Me</h1><p>+4746466666</p>")
})
app.post("/register", (req, res)=>{
    res.sendStatus(201)
})
app.put("/user/angela", (req, res)=>{
    res.sendStatus(200)
})
app.patch("/user/angela", (req, res)=>{
    res.sendStatus(200)
})
app.delete("/user/angela", (req, res)=>{
    res.sendStatus(200)
})

app.listen(port, ()=>{
    console.log(
        `app is running in port ${port}`
    );
})

// netstat -ano | findstr :portNumber

// taskkill /PID typeyourPIDhere /F

//console.log(req.rawHeaders)--> generates the list of key value pairs where the request is originated

// npm install -g nodemon
//nodemon index.js
