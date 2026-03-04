function login(){
window.location.href="index.html"
}

/* TASKS */

let tasks=[]

function addTask(){

const title=prompt("Enter task")

if(!title) return

tasks.push(title)

renderTasks()

}

function renderTasks(){

const list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((task,index)=>{

const div=document.createElement("div")

div.className="task"

div.innerHTML=`
${task}
<button onclick="deleteTask(${index})">🗑</button>
`

list.appendChild(div)

})

}

function deleteTask(index){

tasks.splice(index,1)

renderTasks()

}

/* CALENDAR */

document.addEventListener('DOMContentLoaded',function(){

const calendarEl=document.getElementById('calendar')

if(calendarEl){

const calendar=new FullCalendar.Calendar(calendarEl,{
initialView:'dayGridMonth',
height:500
})

calendar.render()

}

})

/* AI STUDY PLANNER */

function generatePlan(){

const goal=document.getElementById("studyGoal").value

const plan=`
Study Plan for: ${goal}

Day 1 → Basics
Day 2 → Concepts
Day 3 → Practice
Day 4 → Mini Project
Day 5 → Advanced Topics
Day 6 → Build Project
Day 7 → Revision
`

document.getElementById("aiResult").innerText=plan

}

/* PARTICLES */

if(document.getElementById("particles-js")){

particlesJS("particles-js",{

particles:{
number:{value:60},
size:{value:3},
color:{value:"#ffffff"},
line_linked:{enable:true,color:"#ffffff",opacity:0.3},
move:{speed:2}

}

})

}