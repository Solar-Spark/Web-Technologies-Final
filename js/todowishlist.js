const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const recommendBtn = document.querySelector("#recommend-btn");
const recommendText = document.querySelector("#recommend-txt");
const films = ["Dune", "Red Sparrow", "Moneyball", "Trouble With The Curve 2", "The Dictator", "Haunted Mansion", "Pitch Perfect", "American Made", "Searching", "Ballerina"];

films.forEach((film) => {
    const filmOption = document.createElement("option");
    filmOption.value = film;
    filmOption.innerText = film;
    taskInput.appendChild(filmOption);
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToList(task.text, task.completed);
    });
}

function saveTasks() {
    const tasks = Array.from(taskList.children).map(taskItem => ({
        text: taskItem.querySelector(".task-text").innerText,
        completed: taskItem.classList.contains("completed")
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToList(taskText, isCompleted = false) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.draggable = true;

    if (isCompleted) {
        taskItem.classList.add("completed");
    }

    taskItem.innerHTML = `
        <div class="task-text">${taskText}</div>
        <div class="wish-btns">
            <button class="complete-btn"></button>
            <button class="delete-btn"></button>
        </div>
    `;

    taskItem.addEventListener("dragstart", function () {
        taskItem.classList.add("dragging");
    });

    taskItem.addEventListener("dragend", function () {
        taskItem.classList.remove("dragging");
        saveTasks();
    });

    taskList.addEventListener("dragover", function (e) {
        e.preventDefault();
        const draggingItem = document.querySelector(".dragging");
        const siblings = [...taskList.querySelectorAll(".task-item:not(.dragging)")];
        const nextSibling = siblings.find(sibling => {
            return e.clientY < sibling.getBoundingClientRect().top + sibling.offsetHeight / 2;
        });

        taskList.insertBefore(draggingItem, nextSibling);
    });

    const completeBtn = taskItem.querySelector(".complete-btn");
    completeBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
        saveTasks();
    });

    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        const OK = confirm("Are you sure you want to delete this film?");
        if (OK) {
            taskItem.remove();
            saveTasks();
        }
    });

    taskList.appendChild(taskItem);
}

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please choose a film!");
        return;
    }

    addTaskToList(taskText);
    saveTasks();

    taskInput.value = "";
});

document.addEventListener("DOMContentLoaded", loadTasks);

recommendBtn.addEventListener("click", function () {
    recommendText.textContent = "Try to watch " + films[Math.round(Math.random() * films.length)];
});
