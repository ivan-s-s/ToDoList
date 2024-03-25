import { createLabel, createInput } from './modules/createInput';
import { createButton } from './modules/createButton';
import { projectContainer, renderProjects } from './projectList';
import { addProject } from './project';

export const newProjectButton = document.querySelector('#new-project-button');
// создание формы
export function renderProjectForm() {
  const newProjectForm = document.createElement('div');
  newProjectForm.id = 'new-project-form';
  newProjectButton.before(newProjectForm);

  createLabel(newProjectForm, 'project-name-label', 'project-name-input', 'Project Name: ')
  createInput(newProjectForm, 'text', 'project-name-input', 'input-text')

  const createButtonForm = createButton(newProjectForm, "new-project-create-button-id", "new-project-create-button-class", "Create");

  const cancelButtonForm = createButton(newProjectForm, "new-project-cancel-button-id", "new-project-cancel-button-class", "Cancel");

  newProjectForm.querySelector('.input-text').focus();

  return {
    newProjectForm,
    createButton: createButtonForm,
    cancleButton: cancelButtonForm
  }
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