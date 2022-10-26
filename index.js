//importing express packages
const express = require("express");
// instantianting a new express server
const app = express();
// selecting network port
const PORT = 3000;
// importing path package from standard library
const path =require("path");

//middle ware to serve static assets
app.use(express.static("public"))

//data array
const animals = [
    {
        id:1,
        name:"Shiva",
        isCat:true
    },
    {
        id:2,
        name:"Bahamut",
        isCat:true
    },
    {
        id:3,
        name:"Bella",
        isCat:false
    },
]

// GET reuquest to /, serves html page
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})

// GET to /animals, sends back an array of animals
app.get("/animals",(req,res)=>{
    console.log("hello")
    res.json(animals)
})
// app.post("/animals",(req,res)=>{
//     res.json("post request recieved")
// })

//GET to /animals/1, grabs that animal by ID
app.get('/animals/:animalId',(req,res)=>{
    for (let i = 0; i < animals.length; i++) {
        const thisAnimal = animals[i];
        if(thisAnimal.id==req.params.animalId){
            return res.json(thisAnimal)
        }
        
    }
    return res.status(404).send("no such animal!")
})

// app.delete("/animals/:animalId",(req,res)=>{
//     res.send("delete request recieved!")
// })
// app.put("/animals/:animalId",(req,res)=>{
//     res.send("put request recieved")
// })

// catch all for all unhandled routes 
app.get("*",(req,res)=>{
    res.send("not a valid route! try /animals or /animals/:id!")
})

//tells my server where to looks for requests
app.listen(PORT,()=>{
    console.log("listening!")
})