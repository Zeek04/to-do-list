document.addEventListener("DOMContentLoaded", () =>{
    
    const list = document.getElementById("list");

    document.addEventListener("submit", (event) => {
        event.preventDefault()

        const toDo = document.getElementById("ToDo").innerText;

        const li = document.createElement('li');

       
        list.appendChild(li);


        console.log(toDo)

    })
})