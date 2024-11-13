const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToList(task.text, task.completed);
    });
}

// Function to save tasks to local storage
function saveTasks() {
    const tasks = Array.from(taskList.children).map(taskItem => ({
        text: taskItem.querySelector("span").innerText,
        completed: taskItem.classList.contains("completed")
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to add a task to the list
function addTaskToList(taskText, isCompleted = false) {
    // Create task element
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    if (isCompleted) {
        taskItem.classList.add("completed");
    }
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Add event listener for 'Complete' button
    const completeBtn = taskItem.querySelector(".complete-btn");
    completeBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
        saveTasks();
    });

    // Add event listener for 'Delete' button
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        const OK = confirm("Are you sure you want to delete this task?");
        if (OK) {
            taskItem.remove();
            saveTasks();
        }
    });

    // Append task to the list
    taskList.appendChild(taskItem);
}

// Event listener for the "Add" button
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    // Input validation
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Check if the number of tasks is less than 5
    if (taskList.childElementCount >= 5) {
        alert("Maximum possible amount of tasks is 5!");
        return;
    }

    // Add task to the list and save
    addTaskToList(taskText);
    saveTasks();

    // Clear input field
    taskInput.value = "";
});

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);
