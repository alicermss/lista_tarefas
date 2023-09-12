const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const listTasks = [];
let id = 0;

function addTask(){
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;
    taskContent.id = id

    taskItemContainer.appendChild(taskContent);

    tasksContainer.appenChild(taskItemContainer);

    if(inputElement.value != ""){
        listTasks.push(inputElement.value);
    }
    inputElement.value = "";
    id++
}

const addItens = ["tarefa1, tarefa2, tarefa3"];
for (let i = 0; i < addItem.length; i++) {
    console.log(addItem[i]);
}


addTaskButton.addEventListener("click", () => addTask());