let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function login() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("appPage").style.display = "block";
    displayTasks();
}

function logout() {
    document.getElementById("appPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

function addTask() {
    const text = document.getElementById("taskInput").value;
    if (!text) return;

    tasks.push({
        text: text,
        category: "Study",
        completed: false
    });

    saveTasks();
    document.getElementById("taskInput").value = "";
    displayTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function filterTasks(category) {
    displayTasks(category);
}

function displayTasks(filter = "All") {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        if (filter === "All" || task.category === filter) {
            const div = document.createElement("div");
            div.className = "task-item";
            if (task.completed) div.classList.add("completed");

            div.innerHTML = `
                <span onclick="toggleComplete(${index})">
                    ${task.text}
                </span>
                <button onclick="deleteTask(${index})">🗑</button>
            `;
            list.appendChild(div);
        }
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}