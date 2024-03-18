export function createLabel(
  parentElement,
  labelId = '',
  inputId = '',
  text = ''
) {
  const inputLabel = document.createElement('label');
  inputLabel.id = labelId;
  inputLabel.htmlFor = inputId;
  inputLabel.textContent = text;
  parentElement.append(inputLabel);
}

export function createInput(
  parentElement,
  inputType = 'text',
  inputId = '',
  className = '',
  value = '',
  name = '',
  oldElement
) {
  const inputElement = document.createElement('input');
  inputElement.type = inputType;
  inputElement.id = inputId;
  inputElement.className = className;
  inputElement.name = name;
  inputElement.value = value;
  if (oldElement) {
    parentElement.replaceWith(inputElement, oldElement);
  } else {
    parentElement.append(inputElement);
  }
}

// нужно добавить редактирование radio элемента