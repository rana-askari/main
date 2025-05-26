document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" onchange="toggleDone(this)">
    <span class="task-label">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    <button class="delete-btn" onclick="addSubtask(this)">+Subtask</button>
    <ul class="subtask-list"></ul>
  `;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function toggleDone(checkbox) {
  checkbox.parentElement.classList.toggle("done");
}

function deleteTask(button) {
  button.parentElement.remove();
}

function addSubtask(button) {
  const subtaskText = prompt("Enter subtask:");
  if (!subtaskText) return;

  const subtask = document.createElement("li");
  subtask.innerHTML = `
    <input type="checkbox" onchange="toggleDone(this)">
    <span class="task-label">${subtaskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  button.parentElement.querySelector(".subtask-list").appendChild(subtask);
}
