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

export function createEditButtonsContainer(
  oldElement
) {
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  createButton(buttonContainer, '', 'button-container-save', 'Save');
  createButton(buttonContainer, '', 'button-container-cancel', 'Cancel');

  oldElement.replaceWith(buttonContainer);
}