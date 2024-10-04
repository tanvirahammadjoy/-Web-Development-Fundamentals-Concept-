let todoInputValue = document.querySelector(".todo-value");
let contentTodoListBox = document.querySelector(".content-todo-list-box ul");
let todoAddBtn = document.querySelector("#add-btn");

let todoArr = [];

// Function to save todos to local storage
function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todoArr));
}

// Function to load todos from local storage
function loadFromLocalStorage() {
  let data = localStorage.getItem("todo");
  if (data) {
    todoArr = JSON.parse(data);
    todoArr.forEach((todo) => {
      todoAdd(todo.value, false, todo.active); // false indicates not to add to localStorage again and
      // Pass the active state from storage
    });
  }
}

// Function to add a new todo
function todoAdd(todoInputValue, addToStorage = true, isActive = false) {
  let li = document.createElement("li");
  li.innerHTML = `
    <span class="${isActive ? "active" : ""}">${todoInputValue}</span>
    <div class="li-btn">
    <img class="edit" src="iconmonstr-pencil-square-filled-240.png" alt="edit">
    <img class="delete" src="iconmonstr-trash-can-filled-240.png" alt="delete">
    </div>
  `;

  // Append the list item to the DOM
  contentTodoListBox.appendChild(li);

  // Get the span and attach a toggle event to it
  let textSpan = li.querySelector("span");
  textSpan.addEventListener("click", () => {
    toggle(textSpan);

    // Update the active state in todoArr
    let index = todoArr.findIndex((todo) => todo.value === todoInputValue);
    if (index !== -1) {
      todoArr[index].active = textSpan.classList.contains("active");
      saveToLocalStorage();
    }
  });

  // Get the delete button and attach the delete event
  let deleteBtn = li.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    deleteTodo(li, todoInputValue);
  });

  // Get the edit button and attach the edit event
  let editBtn = li.querySelector(".edit");
  editBtn.addEventListener("click", () => {
    editTodo(textSpan, todoInputValue);
  });

  // If addToStorage is true, add the new todo to localStorage
  if (addToStorage) {
    todoArr.push({
      value: todoInputValue,
      active: isActive, // Store the active state
    });
    saveToLocalStorage();
  }
}

// Function to toggle the class on the clicked span
function toggle(span) {
  span.classList.toggle("active");
}

// Function to delete a todo
function deleteTodo(li, todoText) {
  li.remove();

  todoArr = todoArr.filter((todo) => todo.value !== todoText);
  saveToLocalStorage();
}

// Function to edit a todo
function editTodo(span, oldTodoText) {
  let newTodoText = prompt("Edit your todo:", oldTodoText);
  if (newTodoText !== null && newTodoText.trim() !== "") {
    span.textContent = newTodoText;
    let index = todoArr.findIndex((todo) => todo.value === oldTodoText);
    if (index !== -1) {
      todoArr[index].value = newTodoText;
    }
    saveToLocalStorage();
  }
}

// Load todos from localStorage when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
});

// Add event listener to the "Add" button
todoAddBtn.addEventListener("click", () => {
  if (todoInputValue.value === "") {
    return;
  } else {
    todoAdd(todoInputValue.value);
    todoInputValue.value = "";
  }
});
