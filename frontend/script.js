/* LOGIN */

function login(){

const email=document.getElementById("email").value
const password=document.getElementById("password").value

if(email && password){

localStorage.setItem("user",email)

window.location.href="index.html"

}else{

alert("Enter email and password")

}

}

function logout(){

localStorage.removeItem("user")

window.location.href="login.html"

}

/* TASK SYSTEM */

let tasks=[]

let currentFilter="all"

function addTask(){

const title=prompt("Enter task")

if(!title) return

const category=prompt("Category: study / work / personal")

tasks.push({title,category})

renderTasks()

}

function renderTasks(){

const list=document.getElementById("taskList")

list.innerHTML=""

tasks
.filter(task=>currentFilter==="all" || task.category===currentFilter)
.forEach((task,index)=>{

const div=document.createElement("div")

div.className="task"

div.innerHTML=`
${task.title} (${task.category})
<button onclick="deleteTask(${index})">🗑</button>
`

list.appendChild(div)

})

}

function deleteTask(index){

tasks.splice(index,1)

renderTasks()

}

function filterTasks(category){

currentFilter=category

renderTasks()

}