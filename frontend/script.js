function login(){

const email=document.getElementById("email").value

if(email){

localStorage.setItem("user",email)

window.location.href="index.html"

}

}

function logout(){

localStorage.removeItem("user")

window.location.href="login.html"

}

/* TASKS */

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

/* PLAN GENERATOR */

function generatePlan(){

const goal=document.getElementById("goal").value

document.getElementById("planResult").innerText=

"Plan for: "+goal+
"\nDay 1: Basics"+
"\nDay 2: Practice"+
"\nDay 3: Build Project"

}

/* PROGRESS */

let progress=0

function increaseProgress(){

progress+=10

document.getElementById("progressBar").value=progress

}

/* POMODORO */

let time=1500

function startTimer(){

setInterval(()=>{

if(time>0){

time--

}

let minutes=Math.floor(time/60)

let seconds=time%60

document.getElementById("timer").innerText=

minutes+":"+(seconds<10?"0":"")+seconds

},1000)

}

/* SIDEBAR NAVIGATION */

function showSection(id){

document.querySelectorAll(".card").forEach(c=>c.style.display="none")

document.getElementById(id).style.display="block"

}
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

alert("Account created successfully")

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

alert("Invalid login credentials")

}

}