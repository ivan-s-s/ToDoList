import { createButton } from "./modules/createButton";
import { createLabel, createInput, createRadioInput } from "./modules/createInput";

export const newTaskButton = document.querySelector('#new-task-button');

export function renderTaskForm() {
  const newTaskForm = document.createElement('div');
  newTaskForm.id = 'new-Task-form';
  newTaskButton.before(newTaskForm);

  // title, description, createdDate, dueDate, priority
  createLabel(newTaskForm, 'task-name-label', 'task-name-input', 'Task Name: ');
  createInput(newTaskForm, 'text', 'task-name-input', 'input-text');

  createLabel(newTaskForm, 'task-desc-label', 'task-desc-input', 'Description: ');
  createInput(newTaskForm, 'text', 'task-desc-input', 'input-text');

  createLabel(newTaskForm, 'task-date-label', 'task-date-input', 'Due Date: ');
  createInput(newTaskForm, 'date', 'task-date-input', 'input-date');

  createLabel(newTaskForm, 'task-priority-label', 'task-priority-input', 'Priority: ');
  createRadioInput(newTaskForm, 5);

  const createButtonForm = createButton(newTaskForm, "new-task-create-button-id", "new-task-create-button-class", "Create");

  const cancelButtonForm = createButton(newTaskForm, "new-task-cancel-button-id", "new-task-cancel-button-class", "Cancel");

  newTaskForm.querySelector('.input-text').focus();

  return {
    newTaskForm,
    createButton: createButtonForm,
    cancleButton: cancelButtonForm
  }
}