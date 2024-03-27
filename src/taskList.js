import { projectList } from "./project";

export const taskContainer = document.getElementById('tasks-list');

export const renderTasks = () => {
  taskContainer.innerHTML = '';

  projectList[0].taskList.forEach((task, index) => {
    console.log(index, task);
  })
}