/* ---------------- LOGIN & SIGNUP ---------------- */

function signup(){

let email=document.getElementById("signupEmail").value
let pass=document.getElementById("signupPassword").value

localStorage.setItem("email",email)
localStorage.setItem("pass",pass)

alert("Account Created Successfully")

window.location="login.html"

}

function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

if(email===localStorage.getItem("email") &&
pass===localStorage.getItem("pass")){

window.location="index.html"

}else{

alert("Invalid Email or Password")

}

}
function showSection(id){

let sections=document.querySelectorAll(".card")

sections.forEach(section=>{
section.style.display="none"
})

document.getElementById(id).style.display="block"

}


/* ---------------- TASK BOARD ---------------- */

function addTask(){

let text=document.getElementById("taskInput").value

if(text==="") return

let li=document.createElement("li")

li.innerText=text

document.getElementById("taskList").appendChild(li)

document.getElementById("taskInput").value=""

}


/* ---------------- AI STUDY PLAN GENERATOR ---------------- */

function generatePlan(){

let subject=document.getElementById("subject").value.toLowerCase()
let days=parseInt(document.getElementById("days").value)

let result=document.getElementById("planResult")

let planData={
python:[
"Introduction to Python",
"Variables & Data Types",
"Operators & Expressions",
"Conditional Statements",
"Loops",
"Functions",
"Mini Project"
],

c:[
"Introduction to C Programming",
"Variables & Data Types",
"Operators",
"Conditional Statements",
"Loops",
"Functions",
"Pointers & Arrays"
],

react:[
"Introduction to React",
"JSX & Components",
"Props and State",
"Event Handling",
"React Hooks",
"API Fetching",
"Build React Project"
]
}

let youtube={
python:"https://www.youtube.com/watch?v=_uQrJ0TkZlc",
c:"https://www.youtube.com/watch?v=KJgsSFOSQv0",
react:"https://www.youtube.com/watch?v=bMknfKXIFA8"
}

let topics=planData[subject]

if(!topics){

result.innerHTML="Subject not found. Try Python / C / React."

return

}

let html=`<h3>Study Plan for ${subject.toUpperCase()}</h3>`

for(let i=0;i<days;i++){

let topic=topics[i % topics.length]

html+=`<p><b>Day ${i+1}:</b> ${topic}</p>`

}

html+=`
<br>
<b>Recommended Full Course:</b>
<br>
<a href="${youtube[subject]}" target="_blank">
Watch Complete Course
</a>
`

result.innerHTML=html

}


/* ---------------- WEEKLY STUDY PLANNER ---------------- */

function generateWeek(){

let subject=document.getElementById("weeklySubject").value

let weekPlan=[
"Study Basics and Concepts",
"Practice Problems",
"Learn Advanced Topics",
"Build Small Project",
"Revision",
"Practice Coding",
"Final Review"
]

let html=""

weekPlan.forEach((task,i)=>{

html+=`<p><b>Day ${i+1}:</b> ${task} for ${subject}</p>`

})

document.getElementById("weekResult").innerHTML=html

}


/* ---------------- DEADLINE REMINDER ---------------- */

function setDeadline(){

let task=document.getElementById("deadlineTask").value
let date=document.getElementById("deadlineDate").value

document.getElementById("deadlineMsg").innerText=
`Reminder set for ${task} on ${date}`

}


/* ---------------- STUDY STREAK ---------------- */

function updateStreak(){

let streak=localStorage.getItem("streak") || 0

streak++

localStorage.setItem("streak",streak)

document.getElementById("streakCount").innerText=streak

}


/* ---------------- AI STUDY ASSISTANT ---------------- */

function askAI(){

let question=document.getElementById("chatInput").value.toLowerCase()

let answer=""

if(question.includes("what is c")){

answer="C is a powerful programming language developed by Dennis Ritchie. It is widely used for system programming, operating systems, and embedded systems."

}

else if(question.includes("python")){

answer="Python is a high-level programming language known for its simplicity. It is used in AI, web development, automation and data science."

}

else if(question.includes("react")){

answer="React is a JavaScript library created by Facebook used to build modern interactive user interfaces."

}

else if(question.includes("loop")){

answer="Loops allow code to run repeatedly. Common loops are for loop and while loop."

}

else{

answer="Try learning fundamentals first, practice coding daily, and build projects."

}

document.getElementById("chatResult").innerText=answer

}


/* ---------------- AI DOUBT SOLVER ---------------- */

function solveDoubt(){

let input=document.getElementById("doubtInput")
let chat=document.getElementById("chatBox")

let question=input.value.toLowerCase()

let answer=""

if(question.includes("algorithm")){

answer="Algorithms are step-by-step procedures used to solve problems efficiently."

}

else if(question.includes("data structure")){

answer="Data structures organize and store data efficiently such as arrays, linked lists, stacks and trees."

}

else if(question.includes("database")){

answer="Databases store structured data. Examples include MySQL, MongoDB and PostgreSQL."

}

else{

answer="Break the concept into smaller parts and practice coding regularly."

}

chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`
chat.innerHTML += `<p><b>AI:</b> ${answer}</p>`

input.value=""

}


/* ---------------- AI ROADMAP GENERATOR ---------------- */

function generateRoadmap(){

let subject=document.getElementById("roadmapSubject").value.toLowerCase()
let goal=document.getElementById("goal").value
let days=parseInt(document.getElementById("roadmapDays").value)

let roadmapResult=document.getElementById("roadmapResult")

let topics={
python:[
"Python Basics",
"Data Types",
"Control Statements",
"Loops",
"Functions",
"OOP Concepts",
"File Handling",
"Modules",
"Flask Basics",
"Build Backend API"
],

c:[
"C Introduction",
"Variables",
"Operators",
"Conditional Statements",
"Loops",
"Functions",
"Arrays",
"Pointers",
"Structures",
"Mini Project"
],

react:[
"JavaScript Fundamentals",
"React Basics",
"Components",
"Props",
"State",
"Hooks",
"API Fetch",
"Routing",
"State Management",
"React Project"
]
}

let youtube={
python:"https://www.youtube.com/watch?v=_uQrJ0TkZlc",
c:"https://www.youtube.com/watch?v=KJgsSFOSQv0",
react:"https://www.youtube.com/watch?v=bMknfKXIFA8"
}

let subjectTopics=topics[subject]

if(!subjectTopics){

roadmapResult.innerHTML="Subject not available."

return

}

let html=`<h3>${subject.toUpperCase()} Roadmap for ${goal}</h3>`

for(let i=0;i<days;i++){

let topic=subjectTopics[i % subjectTopics.length]

html+=`<p><b>Day ${i+1}:</b> ${topic}</p>`

}

html+=`
<br>
<b>Recommended Course</b>
<br>
<a href="${youtube[subject]}" target="_blank">Watch Course</a>
`

roadmapResult.innerHTML=html

}


/* ---------------- THEME TOGGLE ---------------- */

function toggleTheme(){

document.body.classList.toggle("light-mode")

}


/* ---------------- STUDY PROGRESS CHART ---------------- */

let progress=0

if(document.getElementById("progressChart")){

let ctx=document.getElementById("progressChart").getContext("2d")

var chart=new Chart(ctx,{
type:"line",
data:{
labels:["Start"],
datasets:[{
label:"Study Progress",
data:[0],
borderColor:"#c7a98b",
fill:false
}]
}
})

}

function updateProgress(){

progress++

chart.data.labels.push("Session "+progress)

chart.data.datasets[0].data.push(progress)

chart.update()

}