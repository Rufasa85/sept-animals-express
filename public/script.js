console.log("i am linked!")
const animalUl = document.querySelector("#animals")
const aniForm = document.querySelector("#new-animal");
const aniId = document.querySelector("#animalId");
const aniName = document.querySelector("#animalName");

fetch("/animals").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
    data.forEach(ani=>{
        const newLi = document.createElement('li');
        newLi.textContent = ani.name
        animalUl.append(newLi)
    })
})

aniForm.addEventListener("submit",e=>{
    e.preventDefault();
    const dataObj ={
        id:parseInt(aniId.value),
        name:aniName.value
    }
    console.log(dataObj);
    fetch("/animals",{
        method:"POST",
        body:JSON.stringify(dataObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        } 
    })
})