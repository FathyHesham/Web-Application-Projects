// [1] Get The Selectors (Text Form & Input Field & Task Container)
let taskForm = document.getElementById("taskForm");
let textInput = document.getElementById("inputText");
let taskContainer = document.querySelector(".tasks");

// [2] Create Submit Event
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let textTask = textInput.value.trim();
    if (textTask !== "") {
        // Add The Task In Task Container
        addTask(textTask);
        // Save Task In Local Storage
        saveTask(textTask);
        // Remove Any Text In Input Field
        textInput.value = "";
    }
});
// [3] After Loaded The Page, Load All Tasks
document.addEventListener("DOMContentLoaded", loadTasks);
// [4] Create Function To Add Task
function addTask (taskObj) {

    // Get The Text & isComplated Or Not Form Task Object
    let textTask = typeof taskObj === "string" ? taskObj : taskObj.text;
    let isCompleted = typeof taskObj === "object" ? taskObj.completed : false;

    // [1] Add New Selector "div"
    let taskDiv = document.createElement("div");
    // [2] Take New "div" classList Named "task"
    taskDiv.classList.add("task");
    // [3] Add New Selector "div"
    let taskContent = document.createElement("div");
    // [4] Take New "div" classList Named "content"
    taskContent.classList.add("content");
    // [5] Add New Selector "input checkbox"
    let checkbox = document.createElement("input");
    // [6] Add New Attribure Form Input Is checkbox
    checkbox.setAttribute("type", "checkbox");
    // [7] Assign The CheckBox Checked To isCompleted
    checkbox.checked = isCompleted;
    // [8] Create Checked Event
    checkbox.addEventListener("change", function () {
        updateTaskStatus(textTask, checkbox.checked);
    });
    // [8] Add New Selector "p"
    let taskTextElement = document.createElement("p");
    // [9] Append Text In p
    taskTextElement.textContent = textTask;
    // [10] Add New Selector "button"
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    // [11] Take New "button" classList Named "delete"
    deleteButton.classList.add("delete");
    // [12] Create Delete Event
    deleteButton.addEventListener("click", function () {
        taskDiv.remove();
        deleteTask(textTask);
    });
    // [13] Append (checkbox & p) in taskContent div
    taskContent.append(checkbox, taskTextElement);
    // [14] Append "taskContent div" & "deleteButton" In "task div"
    taskDiv.append(taskContent, deleteButton);
    // [15] Append taskDiv In taskContainer
    taskContainer.appendChild(taskDiv);
}
// [5] Create Function To Save Task
function saveTask (task) {
    // [1] Get All Tasks Form Local Storage And Convert The Task From String To JSON
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // [2] Add New Task In Tasks List & Status
    tasks.push({ text: task, completed: false });
    // [3]  Add The New Task In Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// [6] Create Function To Load Task
function loadTasks () {
    // [1] Get All Tasks Form Local Storage And Convert The Task From String To JSON
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // [2] Add All Tasks Of Exist In Local Storage
    tasks.forEach(element => {
        addTask(element);
    });
}
// [7] Create Function To Delete Task
function deleteTask (taskToDelete) {
    // [1] Get All Tasks Form Local Storage And Convert The Task From String To JSON
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // [2] Filter The Tasks And Remove Task
    tasks = tasks.filter((task) => {
        return ((typeof task === "string" ? task : task.text) !== taskToDelete);
    });
    // [3]  Add The New Task In Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// [8] Create Function To Update Task Status
function updateTaskStatus (textTask, isCompleted) {
    // [1] Get All Tasks Form Local Storage And Convert The Task From String To JSON
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // [2] Find And Update The Task Status
    tasks = tasks.map((task) => {
        // Convert old format to new format
        if (typeof task === "string") {
            return task === textTask ? { text: task, completed: isCompleted } : { text: task, completed: false };
        } else {
            // Update existing object format
            if (task.text === textTask) {
                task.completed = isCompleted;
            }
            return task;
        }
    });
    // [3]  Save Updated Tasks In Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}