import './styles/main.css';
import './styles/aside.css';
import { format } from 'date-fns';

import { newProjectButton, renderProjectForm } from './projectForm';
import { projectContainer, renderProjects } from './projectList';
import { addProject, projectList, getAllTasks, allTasksList } from './project';

import { reloadProjectList } from './storage.js'
import { renderTaskForm } from './taskForm.js';

console.log(localStorage)

if(localStorage.length === 0) {
    const allTasks = addProject('All Tasks')
    const todayTasks = addProject('Today Tasks')
    const weekTasks = addProject('Week Tasks')

    const books = addProject('Read books')
    const work = addProject('Work')
    
    // title, description, createdDate, dueDate, priority
    books.addTask('The Lord of the Rings', 'Read the first 3 chapters', format(new Date(), 'yyyy-MM-dd'), format(new Date(2024, 3, 24), 'yyyy-MM-dd'), '5')
    books.addTask('Harry Potter', 'Read the first 2 chapters', format(new Date(), 'yyyy-MM-dd'), format(new Date(2024, 3, 28), 'yyyy-MM-dd'), '3')
    books.addTask('Bible', 'Read the first 1 chapters', format(new Date(), 'yyyy-MM-dd'), format(new Date(2024, 5, 1), 'yyyy-MM-dd'), '1')
    
    getAllTasks()
    allTasks.taskList = allTasksList
}
else {
    reloadProjectList()
    getAllTasks()
    // projectList[0].taskList = allTasksList
}


newProjectButton.addEventListener('click', () => {
  if(projectContainer.nextElementSibling != newProjectButton) {
    return
  }
  const form = renderProjectForm();
  form.createButton.addEventListener('click', () => {
    const element = document.getElementById('project-name-input')
    const name = element.value
    if (!name) {
      console.log('Enter the name of your project pls!')
    } else {
      addProject(name)
      renderProjects()
      element.value = ''
      form.newProjectForm.remove()
    }
  })
  form.cancleButton.addEventListener('click', () => {
    form.newProjectForm.remove()
  })
})

renderProjects();

renderTaskForm();