
export let projectList = [];
export let allTasksList = [];

export default class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  addTask(title, description, createdDate, dueDate, priority) {
    const newTask = new Task(title, description, createdDate, dueDate, priority);
    this.taskList.push(newTask);
  }

  deleteTask(index) {
    this.taskList.splice(index, 1)
  }
}

class Task {
  constructor(title, description, createdDate, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function addProject(projectName) {
  const newProject = new Project(projectName);
  projectList.push(newProject);
  return newProject;
}

export function deleteProject(index) {
  projectList.splice(index, 1);
}

export function getAllTasks() {
  allTasksList = [];
  projectList.forEach((project, index) => {
    if(index > 0) {
      project.taskList.forEach(task => {
        allTasksList.push(task)
      })
    }
  })
}