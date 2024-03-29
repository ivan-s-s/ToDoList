import { createButton } from "./modules/createButton";
import { projectList } from "./project";
import { format } from "date-fns";

export const taskContainer = document.getElementById('tasks-list');

export let projectIndexToCreateBtn;

export const renderTasks = (projectIndex) => {
  taskContainer.innerHTML = '';

  projectIndexToCreateBtn = projectIndex;

  projectList[projectIndex].taskList.forEach((task, index) => {
    const taskLi = document.createElement('li');
    taskLi.className = 'task';
    taskContainer.append(taskLi);

    const taskBox = document.createElement('div');
    taskBox.className = 'task-div';
    taskLi.append(taskBox);

    // 3 divs in box
    const checkDiv = document.createElement('div');
    checkDiv.className = 'check-btn';
    taskBox.append(checkDiv);

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-btn';
    taskBox.append(taskDiv);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons-btn';
    taskBox.append(buttonsDiv);

    // task content (due date, title, description, created date)
    const taskDueDate = document.createElement('span');
    taskDueDate.className = 'task_due_date';
    taskDueDate.title = 'Deadline';
    taskDueDate.textContent = format(task.dueDate, "dd-MM-yyyy");
    taskDiv.append(taskDueDate);

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task_title';
    taskTitle.title = 'Title of the task';
    taskTitle.textContent = task.title;
    taskDiv.append(taskTitle);

    const taskDescription = document.createElement('div');
    taskDescription.className = 'task_description';
    taskDescription.title = 'Task context';
    taskDescription.textContent = task.description;
    taskDiv.append(taskDescription);

    const taskCreatedDate = document.createElement('div');
    taskCreatedDate.className = 'task_created_date';
    taskCreatedDate.title = 'Date';
    taskCreatedDate.textContent = format(task.createdDate, "dd-MM-yyyy HH:mm");
    taskDiv.append(taskCreatedDate);

    // button container
    createButton(buttonsDiv, '', 'task_edit-button', 'Edit');
    createButton(buttonsDiv, '', 'task_remove-button', 'X');
  })
}