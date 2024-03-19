import { projectList } from "./project";
import hashSvg from "./assets/hash.svg";
import { createButton, createEditButtonsContainer } from "./modules/createButton";
import { getEditButtons, getRemoveButtons } from "./renderDom";
import { createEditInput, createInput } from "./modules/createInput";

export const projectContainer = document.getElementById('projects-list');

export function renderProjects() {
  projectContainer.innerHTML = '';

  projectList.forEach(project => {
    const projectBox = document.createElement('li');
    projectBox.className = 'project';
    // projectBox.id = project.id;
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
  })
  getRemoveButtons(projectContainer)
  getEditButtons(projectContainer)
}

export function renderProjectEdit(e, index) {
  console.log('edit start')

  const projectBox = e.target.closest('li');
  const projectDiv = projectBox.firstChild;

  const titleSpan = projectDiv.childNodes[1];
  const title = titleSpan.textContent;
  createEditInput('edit-form-input', title, titleSpan);

  const buttonsDiv = projectDiv.lastChild;
  
  createEditButtonsContainer(buttonsDiv);
}