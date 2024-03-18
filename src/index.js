import './styles/main.css';

import { newProjectButton, renderProjectForm } from './projectForm';
import { projectContainer, renderProjects } from './projectList';
import { addProject } from './project';



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
    }
  })
  form.cancleButton.addEventListener('click', () => {
    form.newProjectForm.remove()
  })
})

renderProjects();
// const div = document.createElement('div');
// div.innerHTML = 'Hello';
// div.classList.add('hello');

// const body = document.querySelector('body');
// body.append(div);