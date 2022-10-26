console.log("i am linked!")
const animalUl = document.querySelector("#animals")
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