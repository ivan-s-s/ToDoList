import { projectList } from "./project";
import hashSvg from "./assets/hash.svg";
import { createButton } from "./modules/createButton";

export const projectContainer = document.getElementById('projects-list');

export function renderProjects() {
  projectContainer.innerHTML = '';

  projectList.forEach((project, index) => {
    const projectBox = document.createElement('li');
    projectBox.className = 'project';
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

    createButton(projectButtonContainer, 'project-edit-btn', 'edit-button', 'Edit');
    createButton(projectButtonContainer, 'project-remove-btn', 'remove-button', 'X');

    projectDiv.append(projectButtonContainer);

    // return {
    //   projectBox,
    //   exit: exitButton,
    //   remove: removeButton
    // }
  })
}