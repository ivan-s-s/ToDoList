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

