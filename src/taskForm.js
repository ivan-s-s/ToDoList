import { createButton } from "./modules/createButton";
import { createLabel, createInput, createRadioInput } from "./modules/createInput";
import { projectList } from "./project";
import { projectContainer } from "./projectList";
import { renderTasks, taskContainer, projectIndexToCreateBtn } from "./taskList";
// import { } from "./projectList";

export const newTaskButton = document.querySelector('#new-task-button');

export function renderTaskForm() {
  const newTaskForm = document.createElement('div');
  newTaskForm.id = 'new-Task-form';
  newTaskButton.before(newTaskForm);

  // title, description, createdDate, dueDate, priority
  createLabel(newTaskForm, 'task-name-label', 'task-name-input', 'Task Name: ');
  createInput(newTaskForm, 'text', 'task-name-input', 'input-text');

  createLabel(newTaskForm, 'task-desc-label', 'task-desc-input', 'Description: ');
  createInput(newTaskForm, 'text', 'task-desc-input', 'input-text');

  createLabel(newTaskForm, 'task-date-label', 'task-date-input', 'Due Date: ');
  createInput(newTaskForm, 'date', 'task-date-input', 'input-date');

  createLabel(newTaskForm, 'task-priority-label', 'task-priority-input', 'Priority: ');
  createRadioInput(newTaskForm, 5);

  const createButtonForm = createButton(newTaskForm, "new-task-create-button-id", "new-task-create-button-class", "Create");

  const cancelButtonForm = createButton(newTaskForm, "new-task-cancel-button-id", "new-task-cancel-button-class", "Cancel");

  newTaskForm.querySelector('.input-text').focus();

  return {
    newTaskForm,
    createButton: createButtonForm,
    cancleButton: cancelButtonForm
  }
}

newTaskButton.addEventListener('click', () => {
  if(taskContainer.nextElementSibling != newTaskButton) {
    console.log(taskContainer.nextElementSibling)
    console.log(newTaskButton)
    console.log(taskContainer.nextElementSibling != newTaskButton)
    return
  }
  const form = renderTaskForm();
  newTaskButton.classList.add('hide');
  form.createButton.addEventListener('click', () => {
    // const projectIndex = getProjectIndex();
    const projectIndex = projectIndexToCreateBtn;
    console.log(projectIndex);
    
    // title, description, createdDate, dueDate, priority
    const title = document.getElementById('task-name-input');
    const description = document.getElementById('task-desc-input');
    const createdDate = new Date();
    const dueDate = document.getElementById('task-date-input');
    const priority = getRadioValue();
    
    if (!title) {
      console.log('Enter the title of your task pls!')
    } else {
      console.log(projectIndex)
      console.log(projectList[projectIndex])
      projectList[projectIndex].addTask(title.value, description.value, createdDate, dueDate.value, priority);
      renderTasks(projectIndex);
      title.value = '';
      description.value = '';
      dueDate.value = '';
      clearRadioValue();
      form.newTaskForm.remove();
      newTaskButton.classList.remove('hide');
    }
  })
  form.cancleButton.addEventListener('click', () => {
    form.newTaskForm.remove();
    newTaskButton.classList.remove('hide');
  })
})

const getProjectIndex = () => {
  const projects = projectContainer.querySelectorAll('.project');
  projects.forEach((e, index) => {
    if (e.classList.contains('active')) {
      return index;
    }
  })
}

const getRadioValue = () => {
  const radioContainer = document.getElementById('radio-container');
  const radioMarks = radioContainer.querySelectorAll('.radio-mark');

  for (let mark of radioMarks) {
    if (mark.checked) {
      return mark.value;
    }
  }
}

const clearRadioValue = () => {
  const radioContainer = document.getElementById('radio-container');
  const radioMarks = radioContainer.querySelectorAll('.radio-mark');

  for (let radio of radioMarks) {
    radio.checked = false;
  }
}