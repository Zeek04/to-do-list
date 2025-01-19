const submitBtn = document.getElementById('submit');
const textBox = document.getElementById('text')
const listContainer = document.getElementById('list')

document.addEventListener('DOMContentLoaded', loadTasks);

submitBtn.addEventListener('click', () => {addTask()})

textBox.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        addTask()
    }
})

function addTask(){
    const task = textBox.value.trim()

    if(task === ''){
        alert("Please Input A Task");
        return;
    }

    addTaskToList(task)
    saveTaskToLocalStorage(task)
    textBox.value = '';
}

function addTaskToList(task){
    const li = document.createElement('li')

    li.textContent = task

    li.addEventListener('click', () => {
        li.remove()
        removeTaskFromLocalStorage()
    })

    listContainer.append(li);
}

function saveTaskToLocalStorage(task){
    let tasks = getTasksFromLocalStorage()

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = getTasksFromLocalStorage()

    tasks.forEach((task) => {
        addTaskToList(task)
    });
}

function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function removeTaskFromLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter((t) => t !== task); // Remove the matching task
    localStorage.setItem('tasks', JSON.stringify(tasks));
}