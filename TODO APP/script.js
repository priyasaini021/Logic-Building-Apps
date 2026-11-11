const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// display tasks
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const div = document.createElement("div");

        div.className = "task-item";

        if(task.completed) {
            div.classtest.add("completed");
        }
        div.innerHTML = `
        <span class="task-text">${task.text}</span>

        <div class="task-actions">
        <button onclick="toggleTask(${index})">
            ${task.completed ? "undo" : "complete"}
            </button>

            <button
            onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(div);
    });
}

// add new task
function addTask() {
    const text = taskInput.value.trim();

    if(text === "") {
        alert("Please enter a task!");
        return;
    }
    tasks.push({
        text: text,
        completed: false,
        date: new
        Date().toISOString().split("T") [0]
    });
    saveTasks();
    displayTasks();

    taskInput.value = "";
}

// toggle task completion
function toggleTask(index) {
    tasks[index].completed = !
    tasks[index].completed;

    saveTasks();
    displayTasks();
}

// delete task function
function deleteTask(index) {
    tasks.splice(index, 1);

    saveTasks();
    displayTasks();
}

// add button click event
addBtn.addEventListener("click", addTask);

displayTasks();

// enter key event
taskInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        addTask();
    }
});

