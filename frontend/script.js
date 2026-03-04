let tasks = JSON.parse(localStorage.getItem("tasks")) || []

const input = document.getElementById("taskInput")

input.addEventListener("keypress", function(e){

if(e.key==="Enter"){

addTask()

}

})

function addTask(){

const text = input.value.trim()

if(!text) return

tasks.push({
text:text,
completed:false
})

input.value=""

saveTasks()
renderTasks()

}

function renderTasks(){

const list = document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((task,index)=>{

const div = document.createElement("div")

div.className="task"

div.innerHTML=`

<span class="${task.completed ? "completed" : ""}">
${task.text}
</span>

<div class="actions">

<button onclick="toggleTask(${index})">
✔
</button>

<button onclick="deleteTask(${index})">
✕
</button>

</div>

`

list.appendChild(div)

})

updateCounter()

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed

saveTasks()
renderTasks()

}

function deleteTask(index){

tasks.splice(index,1)

saveTasks()
renderTasks()

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks))

}

function searchTasks(){

const value = document.getElementById("searchInput").value.toLowerCase()

const filtered = tasks.filter(task =>
task.text.toLowerCase().includes(value)
)

displayFiltered(filtered)

}

function displayFiltered(data){

const list = document.getElementById("taskList")

list.innerHTML=""

data.forEach((task,index)=>{

const div=document.createElement("div")

div.className="task"

div.innerHTML=`

<span class="${task.completed ? "completed" : ""}">
${task.text}
</span>

<div class="actions">

<button onclick="toggleTask(${index})">✔</button>

<button onclick="deleteTask(${index})">✕</button>

</div>

`

list.appendChild(div)

})

}

function updateCounter(){

document.getElementById("taskCounter").innerText =
tasks.length + " tasks"

}

/* THEME TOGGLE */

const themeBtn = document.getElementById("themeToggle")

themeBtn.onclick=()=>{

document.body.classList.toggle("light")

}

/* LOAD TASKS */

renderTasks()