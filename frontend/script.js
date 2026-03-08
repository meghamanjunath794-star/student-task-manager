function signup(){

let email=document.getElementById("signupEmail").value
let pass=document.getElementById("signupPassword").value

localStorage.setItem("email",email)
localStorage.setItem("pass",pass)

alert("Account created")

window.location="login.html"

}

function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

if(email===localStorage.getItem("email") &&
pass===localStorage.getItem("pass")){

window.location="index.html"

}else{

alert("Invalid login")

}

}

function addTask(){

let text=document.getElementById("taskInput").value

let li=document.createElement("li")

li.innerText=text

document.getElementById("taskList").appendChild(li)

}

function generatePlan(){

let subject=document.getElementById("subject").value
let days=document.getElementById("days").value

let topics=[
"Introduction",
"Basics",
"Theory",
"Practice",
"Mini Project",
"Advanced Concepts",
"Final Project"
]

let html=""

for(let i=0;i<days;i++){

html+=`<p><b>Day ${i+1}</b>: ${topics[i%topics.length]} of ${subject}</p>`

}

html+=`<br><a href="https://youtube.com/results?search_query=${subject}+course" target="_blank">Watch YouTube Course</a>`

document.getElementById("planResult").innerHTML=html

}

function generateWeek(){

let subject=document.getElementById("weeklySubject").value

let week=[
"Study basics",
"Practice exercises",
"Learn theory",
"Revision",
"Build small project",
"Practice coding",
"Final review"
]

let html=""

week.forEach((t,i)=>{

html+=`<p>Day ${i+1}: ${t} for ${subject}</p>`

})

document.getElementById("weekResult").innerHTML=html

}

function setDeadline(){

let task=document.getElementById("deadlineTask").value
let date=document.getElementById("deadlineDate").value

document.getElementById("deadlineMsg").innerText=`Reminder set for ${task} on ${date}`

}

function updateStreak(){

let streak=localStorage.getItem("streak")||0

streak++

localStorage.setItem("streak",streak)

document.getElementById("streakCount").innerText=streak

}

function askAI(){

let q=document.getElementById("chatInput").value.toLowerCase()

let ans=""

if(q.includes("python")){

ans="Python is a beginner friendly programming language used in AI, web development and automation."

}

else if(q.includes("react")){

ans="React is a JavaScript library used to build user interfaces with components."

}

else{

ans="Focus on learning fundamentals, practice coding and build projects."

}

document.getElementById("chatResult").innerText=ans

}

function showSection(id){

let sections=document.querySelectorAll(".card")

sections.forEach(s=>s.style.display="none")

document.getElementById(id).style.display="block"

}