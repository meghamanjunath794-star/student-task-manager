function signup(){

const email=document.getElementById("signupEmail").value
const password=document.getElementById("signupPassword").value
const confirm=document.getElementById("confirmPassword").value

if(password!==confirm){
alert("Passwords do not match")
return
}

localStorage.setItem("userEmail",email)
localStorage.setItem("userPassword",password)

alert("Account created")

window.location.href="login.html"

}

function login(){

const email=document.getElementById("email").value
const password=document.getElementById("password").value

const savedEmail=localStorage.getItem("userEmail")
const savedPassword=localStorage.getItem("userPassword")

if(email===savedEmail && password===savedPassword){

window.location.href="index.html"

}else{

alert("Invalid credentials")

}

}

function logout(){
window.location.href="login.html"
}

let tasks=[]

function addTask(){

const text=document.getElementById("taskInput").value
const category=document.getElementById("category").value

tasks.push({text,category})

renderTasks()

}

function renderTasks(){

const list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach(t=>{

const li=document.createElement("li")

li.innerHTML=t.text+" ("+t.category+")"

list.appendChild(li)

})

}

function generatePlan(){

const subject=document.getElementById("subject").value
const days=parseInt(document.getElementById("days").value)

let result="<h3>Study Plan for "+subject+"</h3>"

for(let i=1;i<=days;i++){

result+=`<p>Day ${i}: Study ${subject}</p>`

}

document.getElementById("planResult").innerHTML=result

}

function generateWeeklyPlan(){

const subject=document.getElementById("weekSubject").value
const hours=parseInt(document.getElementById("studyHours").value)

let result="<h3>Weekly Schedule for "+subject+"</h3>"

for(let i=1;i<=7;i++){

let pomodoro=Math.floor((hours*60)/25)

result+=`
<div>
Day ${i} - ${subject}<br>
Study Time: ${hours} hours<br>
Pomodoro Sessions: ${pomodoro}
</div>
`

}

document.getElementById("weeklyResult").innerHTML=result

}

let progress=0

function increaseProgress(){

progress+=10

document.getElementById("progressBar").value=progress

}

let time=1500

function startTimer(){

setInterval(()=>{

if(time>0) time--

let minutes=Math.floor(time/60)
let seconds=time%60

document.getElementById("timer").innerText=
minutes+":"+(seconds<10?"0":"")+seconds

},1000)

}

function showSection(id){

document.querySelectorAll(".card").forEach(c=>c.style.display="none")

document.getElementById(id).style.display="block"

}