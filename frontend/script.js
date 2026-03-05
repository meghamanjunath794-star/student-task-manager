/* navigation */

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


/* task board */

function addTask(){

let text=document.getElementById("taskInput").value

let li=document.createElement("li")
li.innerText=text
li.draggable=true

document.getElementById("taskList").appendChild(li)

}


/* AI plan */

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


/* weekly planner */

function generateWeek(){

let subject=document.getElementById("weeklySubject").value

let plan=[

"Study basics and practice exercises",
"Revise basics and study introduction",
"Learn core theory and practice",
"Revision and problem solving",
"Intermediate concepts and practice",
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


/* pomodoro */

let time=1500

function startPomodoro(){

let timer=setInterval(()=>{

time--

let m=Math.floor(time/60)
let s=time%60

document.getElementById("timer").innerText=m+":"+s

if(time<=0){
clearInterval(timer)
alert("Break time")
}

},1000)

}


/* deadline */

function setDeadline(){

let task=document.getElementById("deadlineTask").value
let date=document.getElementById("deadlineDate").value

document.getElementById("deadlineMsg").innerText=
`Reminder set for ${task} on ${date}`

}


/* AI chat */

function askAI(){

let q=document.getElementById("chatInput").value

document.getElementById("chatResult").innerText=

"Suggested learning path: Search tutorials for "+q+" and practice daily."

}


/* streak */

function updateStreak(){

let streak=localStorage.getItem("streak")||0

streak++

localStorage.setItem("streak",streak)

document.getElementById("streakCount").innerText=streak

}


/* theme */

function toggleTheme(){

document.body.classList.toggle("light")

}


/* analytics */

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