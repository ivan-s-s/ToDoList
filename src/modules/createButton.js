import { projectList } from "../project";

export function createButton(
  parentElement,
  buttonId,
  className,
  text
) {
  const buttonElement = document.createElement('button');
  buttonElement.id = buttonId;
  buttonElement.className = className;
  buttonElement.textContent = text;
  parentElement.append(buttonElement);

  return buttonElement;
}

// Edit Project Buttons Container
export function createEditButtonsContainer(
  oldElement
) {
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  const saveButton = createButton(buttonContainer, '', 'edit-mode-button save', 'Save');
  const cancelButton = createButton(buttonContainer, '', 'edit-mode-button cancel', 'Cancel');

  oldElement.replaceWith(buttonContainer);

  return {
    saveButton,
    cancelButton
  }
}