document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Load tasks from localStorage or initialize with an empty array
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render tasks from localStorage when the page is loaded
  tasks.forEach((task) => renderTask(task));

  // Function to handle adding a new task
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = ""; // Clear input after adding the task
  });

  // Function to render a task
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    
    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;

    // Handle task completion toggle
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return; // Skip if delete button is clicked
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    // Handle task deletion
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id); // Correct comparison
      li.remove();
      saveTasks();
    });

    todoList.appendChild(li);
  }

  // Function to save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
