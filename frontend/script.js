function signup(){

const email=document.getElementById("signupEmail").value
const pass=document.getElementById("signupPassword").value
const confirm=document.getElementById("confirmPassword").value

if(pass!==confirm){

alert("Passwords do not match")

return

}

localStorage.setItem("email",email)
localStorage.setItem("pass",pass)

window.location.href="login.html"

}

function login(){

const email=document.getElementById("email").value
const pass=document.getElementById("password").value

if(email===localStorage.getItem("email") &&
pass===localStorage.getItem("pass")){

window.location.href="index.html"

}else{

alert("Invalid login")

}

}

/* task manager */

let tasks=[]

function addTask(){

const text=document.getElementById("taskInput").value

tasks.push(text)

renderTasks()

}

function renderTasks(){

const list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach(t=>{

const li=document.createElement("li")

li.innerText=t

list.appendChild(li)

})

}

/* study plan generator */

function generatePlan(){

const subject=document.getElementById("subject").value.toLowerCase()
const days=parseInt(document.getElementById("days").value)

if(!subject || !days){
alert("Enter subject and days")
return
}

const plans={

python:[
"Introduction to Python",
"Installing Python & IDE Setup",
"Variables and Data Types",
"Operators and Expressions",
"If Statements and Conditions",
"Loops (for / while)",
"Functions",
"Lists and Tuples",
"Dictionaries and Sets",
"File Handling",
"Object Oriented Programming",
"Modules and Packages",
"Error Handling",
"Working with APIs",
"Mini Project: CLI To-Do App",
"Final Project: Python Automation Script"
],

javascript:[
"Introduction to JavaScript",
"Variables (let, const)",
"Data Types",
"Operators",
"Functions",
"Arrays and Objects",
"DOM Manipulation",
"Events",
"Async JavaScript",
"Fetch API",
"ES6 Concepts",
"Mini Project: To-Do App",
"Final Project: Interactive Web App"
],

react:[
"Introduction to React",
"JSX",
"Components",
"Props",
"State",
"Event Handling",
"React Hooks",
"Routing with React Router",
"API Fetching",
"State Management",
"Mini Project: Notes App",
"Final Project: Full React Dashboard"
],

java:[
"Introduction to Java",
"Java Setup (JDK & IDE)",
"Variables and Data Types",
"Operators",
"Conditional Statements",
"Loops",
"Methods",
"Arrays",
"Object Oriented Programming",
"Collections Framework",
"Exception Handling",
"Mini Project: Student Manager",
"Final Project: Java Console Application"
]

}

const youtubeLinks={

python:"https://www.youtube.com/watch?v=rfscVS0vtbw",
javascript:"https://www.youtube.com/watch?v=W6NZfCO5SIk",
react:"https://www.youtube.com/watch?v=bMknfKXIFA8",
java:"https://www.youtube.com/watch?v=eIrMbAQSU34"

}

let topicList=plans[subject]

if(!topicList){

topicList=[
"Introduction",
"Core Concepts",
"Theory",
"Practice",
"Mini Project",
"Revision"
]

}

let result=`<h3>Complete Study Plan for ${subject.toUpperCase()}</h3>`

for(let i=0;i<days;i++){

let topic=topicList[i % topicList.length]

result+=`<p><b>Day ${i+1}</b>: ${topic}</p>`

}

result+=`<br><b>Recommended Full Course:</b><br>
<a href="${youtubeLinks[subject]}" target="_blank">
Watch YouTube Course
</a>
`

document.getElementById("planResult").innerHTML=result

}
function generateWeeklyPlan(){

let result=""

for(let i=1;i<=7;i++){

result+=`<p>Day ${i}: Study + Practice + Revision</p>`

}

document.getElementById("weeklyResult").innerHTML=result

}

/* deadline reminder */

function setDeadline(){

let task=document.getElementById("deadlineTask").value

let date=document.getElementById("deadlineDate").value

document.getElementById("deadlineMsg").innerText=

`Reminder set for ${task} on ${date}`

}

/* analytics chart */

const ctx=document.getElementById("studyChart")

if(ctx){

new Chart(ctx,{

type:"bar",

data:{

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[{

label:"Study Hours",

data:[2,4,3,5,4],

backgroundColor:"#c7a98b"

}]

}

})

}