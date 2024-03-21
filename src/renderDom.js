import { deleteProject } from "./project";
import { projectContainer, renderProjectEdit, renderProjects } from "./projectList";

export let index = 0;
export let taskIndex = 0;



// функция удаления
// export function getRemoveButtons(container) {
//   let removeButtons = container.querySelectorAll('.remove-button')
//   const removeButtonArray = Array.from(removeButtons)
//   removeButtons.forEach(button => {
//       button.addEventListener('click', (e) => {
//           index = removeButtonArray.indexOf(button)
//           if(container === projectContainer) {
//               console.log(e.target)
//               deleteProject(index)
//           }
//           else if(container === taskContainer) {
//               taskIndex = removeButtonArray.indexOf(button)
//               projectList[index].deleteTask(taskIndex)
//           }
//           renderProjects()
//           // renderTasks()
//       })
//   })
// }



// вешаем слушатель событий на кнопку удаления
export function getRemoveButtons(container) {
  let removeButtons = container.querySelectorAll('.remove-button')
  removeButtons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
          if(container === projectContainer) {
            console.log(e.target)
            deleteProject(index)
          }
          else if(container === taskContainer) {
            // не решенная задача, как определить индекс - решить после реализации тасков
            projectList[index].deleteTask(taskIndex)
          }
          renderProjects()
          
          // renderTasks()
      })
  })
}

// кнопка редактирования проекта
export function getEditButtons(container) {
  let editButtons = container.querySelectorAll('.edit-button')
  editButtons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
          if(container === projectContainer) {
            console.log(e.target)
            renderProjectEdit(e, index)
          }
          
          // renderProjects()
          // renderTasks()
      })
  })
}

// // слушатель события на кнопки редактирования проекта (внутри редактирования)
// export function getEditButtons(container) {
//   let saveButton = container.querySelector('.save');
//   let cancelButton = container.querySelector('.cancel');

//   saveButton.addEventListener('click', (e) => {
    
//   });

//   cancelButton.addEventListener('click', (e) => {

//   })

//   editModeButtons.forEach((button, index) => {
//       button.addEventListener('click', (e) => {
//           if(container === projectContainer) {
//             console.log(e.target)
//             renderProjectEdit(e)
//           }
          
//           // renderProjects()
//           // renderTasks()
//       })
//   })
// }

// export function resetProjectDetails(index) {

// }