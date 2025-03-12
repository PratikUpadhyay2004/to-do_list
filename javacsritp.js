// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get input value and create a new task
      const task = input.value.trim();
      if (task) {
        const li = document.createElement("li");
  
        const taskText = document.createElement("span");
        taskText.textContent = task;
        li.appendChild(taskText);
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          todoList.removeChild(li);
        });
        li.appendChild(deleteBtn);
  
        todoList.appendChild(li);
        input.value = ""; // Clear the input field
      }
    });
  });
  
