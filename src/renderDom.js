import { deleteProject } from "./project";
import { projectContainer, renderProjects } from "./projectList";

export let index = 0;
export let taskIndex = 0;

export function createLabel(text, inputId, labelId, parentElement) {
  const inputLabel = document.createElement('label');
  inputLabel.htmlFor = inputId;
  inputLabel.id = labelId;
  inputLabel.textContent = text;
  parentElement.append(inputLabel);
}

export function createInput(
  type,
  inputId,
  parentElement
) {
  const inputElement = document.createElement('input');
  inputElement.type = type;
  inputElement.id = inputId;
  parentElement.append(inputElement);
}

export function createEditInput(inputId, parentElement, oldElement, type, preFilledValue) {
  const inputElement = document.createElement('input');
  inputElement.id = inputId;
  inputElement.type = type;
  inputElement.value = preFilledValue;
  parentElement.replaceWith(inputElement, oldElement);
}

export function createRadioInput(inputClass, parentElement, valueArray) {
  const elementContainer = document.createElement('div')
  elementContainer.id = 'radio-container'
  parentElement.append(elementContainer)


}

// функция удаления
export function getRemoveButtons(container) {
  let removeButtons = container.querySelectorAll('.remove-button')
  const removeButtonArray = Array.from(removeButtons)
  removeButtons.forEach(button => {
      button.addEventListener('click', () => {
          if(container === projectContainer) {
              index = removeButtonArray.indexOf(button)
              deleteProject(index)
          }
          else if(container === taskContainer) {
              taskIndex = removeButtonArray.indexOf(button)
              projectList[index].deleteTask(taskIndex)
          }
          renderProjects()
          // renderTasks()
      })
  })
}