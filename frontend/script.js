function show(id){

document.querySelectorAll(".section")
.forEach(s=>s.style.display="none")

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

function addTask(){

let text=document.getElementById("taskInput").value

let li=document.createElement("li")
li.innerText=text

document.getElementById("taskList").appendChild(li)

}

/* study plan */

function generatePlan(){

const subject=document.getElementById("subject").value
const days=parseInt(document.getElementById("days").value)

const topics=[

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

html+=`<br>
<a target="_blank"
href="https://youtube.com/results?search_query=${subject}+full+course">
Recommended YouTube Course
</a>
`

document.getElementById("planResult").innerHTML=html

}

/* weekly */

function generateWeek(){

let subject=document.getElementById("weeklySubject").value

let plan=[

"Study basics and practice",
"Revise basics and introduction",
"Core theory and exercises",
"Revision and problem solving",
"Intermediate concepts",
"Mini project",
"Final revision"

]

let html=""

plan.forEach((p,i)=>{

html+=`<p><b>Day ${i+1}</b>: ${p} (${subject})</p>`

})

document.getElementById("weekResult").innerHTML=html

}

/* calendar */

const calendar=document.getElementById("calendarGrid")

if(calendar){

for(let i=1;i<=30;i++){

let d=document.createElement("div")
d.className="day"
d.innerText=i

calendar.appendChild(d)

}

}

/* deadline */

function setDeadline(){

let task=document.getElementById("deadlineTask").value
let date=document.getElementById("deadlineDate").value

document.getElementById("deadlineMsg").innerText=
`Reminder set for ${task} on ${date}`

}

/* streak */

function updateStreak(){

let streak=localStorage.getItem("streak")||0

streak++

localStorage.setItem("streak",streak)

document.getElementById("streakCount").innerText=streak

}

/* AI assistant */

async function askAI(){

const question=document.getElementById("chatInput").value

const response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_OPENAI_API_KEY"
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{role:"system",content:"You are a helpful study assistant."},
{role:"user",content:question}
]

})

})

const data=await response.json()

document.getElementById("chatResult").innerText=
data.choices[0].message.content

}