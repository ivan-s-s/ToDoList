import { projectList } from "./project";
import hashSvg from "./assets/hash.svg";
import { createButton, createEditButtonsContainer } from "./modules/createButton";
import { getEditButtons, getRemoveButtons } from "./renderDom";
import { createEditInput, createInput } from "./modules/createInput";
import { renderTasks } from "./taskList";

export const projectContainer = document.getElementById('projects-list');
// export let projectIndexToCreateBtn;

export function renderProjects() {
  projectContainer.innerHTML = '';

  projectList.forEach((project, index) => {
    const projectBox = document.createElement('li');
    projectBox.className = 'project';
    if (index === 0) projectBox.classList.add('active');
    projectContainer.append(projectBox);

    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-div';
    projectBox.append(projectDiv);

    const projectIcon = document.createElement('span');
    projectIcon.className = 'project-icon';

    const img = document.createElement('img');
    img.src = hashSvg;
    projectIcon.append(img);

    const projectTitle = document.createElement('span');
    projectTitle.className = 'project-title';
    projectTitle.textContent = project.name;
    projectDiv.append(projectIcon, projectTitle);

    const projectButtonContainer = document.createElement('div');
    projectButtonContainer.className = 'button-container';

    createButton(projectButtonContainer, '', 'edit-button', 'Edit');
    createButton(projectButtonContainer, '', 'remove-button', 'X');

    projectDiv.append(projectButtonContainer);

    projectDiv.addEventListener('click', () => {
      // projectIndexToCreateBtn = index;
      renderTasks(index);
    })
  })
  getRemoveButtons(projectContainer)
  getEditButtons(projectContainer)
}

// export function renderProjectBoxBack(e, index) {
//   const projectBox = e.target.closest('li');
//   console.log(projectBox)
//   const projectDiv = projectBox.firstChild;

//   const inputElement = projectDiv.childNodes[1];

//   const spanElement = document.createElement('span');
//   spanElement.textContent = projectList[index].name;

//   inputElement.replaceWith(spanElement);

//   const buttonDiv = projectDiv.lastChild;
//   const newButtonsDiv = document.createElement('div');
//   createButton(newButtonsDiv, '', 'edit-button', 'Edit');
//   createButton(newButtonsDiv, '', 'remove-button', 'X');

//   buttonDiv.replaceWith(newButtonsDiv);
// }

// создаем форму для редактирования
export function renderProjectEdit(e, index) {
  console.log('edit start')

  const projectBox = e.target.closest('li');
  const projectDiv = projectBox.firstChild;

  const titleSpan = projectDiv.childNodes[1];
  const title = titleSpan.textContent;
  
  const inputElement = createEditInput('edit-form-input', title, titleSpan);

  const buttonsDiv = projectDiv.lastChild;
  const editModeButtons = createEditButtonsContainer(buttonsDiv);
  
  editModeButtons.saveButton.addEventListener('click', () => {
    // resetProjectDetails(index);
    console.log(inputElement);
    projectList[index].name = inputElement.element.value;
    // renderProjectBoxBack(ee, index);
    renderProjects()
  });

  editModeButtons.cancelButton.addEventListener('click', () => {
    // renderProjectBoxBack(ee, index);
    renderProjects()
  });
}