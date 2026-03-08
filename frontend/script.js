function signup(){

let email=document.getElementById("signupEmail").value
let pass=document.getElementById("signupPassword").value

localStorage.setItem("email",email)
localStorage.setItem("pass",pass)

alert("Account Created")
window.location="login.html"

}

function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

if(email===localStorage.getItem("email")
&& pass===localStorage.getItem("pass")){

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

let html=""

for(let i=1;i<=days;i++){

html+=`<p>Day ${i}: Study ${subject}</p>`

}

document.getElementById("planResult").innerHTML=html

}

function generateWeek(){

let subject=document.getElementById("weeklySubject").value

let plan=[
"Basics",
"Introduction",
"Theory",
"Practice",
"Revision",
"Mini Project",
"Final Revision"
]

let html=""

plan.forEach((p,i)=>{

html+=`<p>Day ${i+1}: ${p} of ${subject}</p>`

})

document.getElementById("weekResult").innerHTML=html

}

function setDeadline(){

let task=document.getElementById("deadlineTask").value
let date=document.getElementById("deadlineDate").value

document.getElementById("deadlineMsg").innerText=
`Reminder set for ${task} on ${date}`

}

function updateStreak(){

let streak=localStorage.getItem("streak")||0

streak++

localStorage.setItem("streak",streak)

document.getElementById("streakCount").innerText=streak

}

/* AI assistant */

function askAI(){

let q=document.getElementById("chatInput").value.toLowerCase()

let answer=""

if(q.includes("python")){
answer="Start with Python basics, then learn loops, functions and build small projects."
}

else if(q.includes("react")){
answer="Learn HTML, CSS, JS first. Then React components, hooks and build apps."
}

else{
answer="Study fundamentals, practice daily, and build projects to master the topic."
}

document.getElementById("chatResult").innerText=answer

}