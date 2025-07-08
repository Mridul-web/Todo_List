const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.input-section input');
const taskSection = document.querySelector('.task-section');

// Clear any static tasks
taskSection.innerHTML = `<p class="task-header">Tasks (0):</p>`;

// Update task count
function updateTaskCount() {
  const count = taskSection.querySelectorAll('.task').length;
  taskSection.querySelector('.task-header').textContent = `Tasks (${count}):`;
}

// Create a new task element
function createTask(text) {
  const task = document.createElement('div');
  task.className = 'task';

  task.innerHTML = `
    <img src="check-icon.png" alt="Check Icon" class="check-icon-img" />
    <span>${text}</span>
    <div class="task-buttons">
      <i class="fas fa-pen edit"></i>
      <i class="fas fa-times delete"></i>
    </div>
  `;

  // Delete handler
  task.querySelector('.delete').addEventListener('click', () => {
    task.remove();
    updateTaskCount();
  });

  // Edit handler
  task.querySelector('.edit').addEventListener('click', () => {
    const span = task.querySelector('span');
    const newText = prompt("Edit your task:", span.textContent);
    if (newText) span.textContent = newText;
  });

  taskSection.appendChild(task);
  updateTaskCount();
}

// Add task button
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText) {
    createTask(taskText);
    input.value = '';
  }
});

// Optional: allow Enter key to add task
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
