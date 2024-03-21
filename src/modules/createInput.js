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
  } else if (parentElement) {
    parentElement.append(inputElement);
  } else {
    return inputElement;
  }
}

export function createRadioInput(
  parentElement,
  value
) {
  const elementContainer = document.createElement('div');
  elementContainer.id = 'radio-container';
  

  const radioIdsArr = ['one', 'two', 'three', 'four', 'five'];

  for (let i = 0; i < value; i++) {
    createLabel(elementContainer, null, `mark-${radioIdsArr[i]}`, `${i+1}`);
    createInput(elementContainer, 'radio', `mark-${radioIdsArr[i]}`, null, null, 'priority');
  }
  parentElement.append(elementContainer);
}

export function createEditInput(
  className,
  value,
  oldElement
) {
  const inputElement = document.createElement('input');
  inputElement.className = className;
  inputElement.value = value;
  oldElement.replaceWith(inputElement);

  return {
    element: inputElement
  }
}

// нужно добавить редактирование radio элемента