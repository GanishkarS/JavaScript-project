const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== " ") {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = " ";

    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('done');
    });

    taskItem.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      taskList.removeChild(taskItem);
    });
  }
}


