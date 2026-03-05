/* navigation */

function show(id){

const sections=document.querySelectorAll(".section")

sections.forEach(s=>s.style.display="none")

document.getElementById(id).style.display="block"

}

/* signup */

function signup(){

let email=document.getElementById("signupEmail").value
let pass=document.getElementById("signupPassword").value

localStorage.setItem("email",email)
localStorage.setItem("pass",pass)

location.href="login.html"

}

/* login */

function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

if(email===localStorage.getItem("email")
&& pass===localStorage.getItem("pass")){

location.href="index.html"

}else{

alert("Invalid login")

}

}

/* tasks */

let tasks=[]

function addTask(){

let text=document.getElementById("taskInput").value

tasks.push(text)

renderTasks()

}

function renderTasks(){

let list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach(t=>{

let li=document.createElement("li")
li.innerText=t
list.appendChild(li)

})

}

/* study plan */

function generatePlan(){

let subject=document.getElementById("subject").value
let days=document.getElementById("days").value

let topics=[
"Introduction",
"Basics",
"Theory",
"Practice",
"Mini Project",
"Advanced",
"Final Project"
]

let result=""

for(let i=0;i<days;i++){

result+=`<p>Day ${i+1}: ${topics[i%topics.length]}</p>`

}

result+=`<p>
<a target="_blank"
href="https://youtube.com/results?search_query=${subject}+course">
Recommended YouTube Course
</a>
</p>`

document.getElementById("planResult").innerHTML=result

}

/* weekly */

function generateWeek(){

let text=""

for(let i=1;i<=7;i++){

text+=`<p>Day ${i}: Study + Practice + Revision</p>`

}

document.getElementById("weekResult").innerHTML=text

}

/* deadline */

function setDeadline(){

let task=document.getElementById("deadlineTask").value
let date=document.getElementById("deadlineDate").value

document.getElementById("deadlineMsg").innerText=
`Reminder set for ${task} on ${date}`

}

/* pomodoro */

let time=1500
let timer

function startPomodoro(){

timer=setInterval(()=>{

time--

let m=Math.floor(time/60)
let s=time%60

document.getElementById("timer").innerText=`${m}:${s}`

},1000)

}

/* AI chat */

function askAI(){

let q=document.getElementById("chatInput").value

document.getElementById("chatResult").innerHTML=
`AI Suggestion: Search for ${q} tutorials and practice daily.`

}

/* theme */

function toggleTheme(){

document.body.classList.toggle("light")

}