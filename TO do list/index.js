document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const todoText = input.value;
      if (todoText.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox">
          <span>${todoText}</span>
          <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
        input.value = '';
  
        // Send the task to the server
        fetch('/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ task: todoText })
        })
          .then(response => response.json())
          .then(data => {
            // Handle the server response if needed
          })
          .catch(error => {
            // Handle any errors that occur during the request
          });
      }
    });
  
    todoList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentNode;
        todoList.removeChild(li);
  
        // Get the task ID from the data attribute
        const taskId = li.dataset.taskId;
  
        // Send the task ID to the server for deletion
        fetch(`/todos/${taskId}`, {
          method: 'DELETE'
        })
          .then(response => response.json())
          .then(data => {
            // Handle the server response if needed
          })
          .catch(error => {
            // Handle any errors that occur during the request
          });
      }
    });
  
    // Fetch existing tasks from the server
    fetch('/todos')
      .then(response => response.json())
      .then(data => {
        // Process and display the tasks if needed
      })
      .catch(error => {
        // Handle any errors that occur during the request
      });
  });
  