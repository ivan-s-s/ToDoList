import { v4 as uuidv4 } from 'uuid';
import { populateStorage } from "./storage";

export let projectList = [];
export let allTasksList = [];

export default class Project {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
    this.taskList = [];
  }

  addTask(title, description, createdDate, dueDate, priority) {
    const newTask = new Task(title, description, createdDate, dueDate, priority, this.id);
    this.taskList.push(newTask);
    populateStorage();
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
    populateStorage();
  }
}

class Task {
  constructor(title, description, createdDate, dueDate, priority, projectId) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectId = projectId;
  }
}

export function addProject(projectName) {
  const newProject = new Project(projectName);
  projectList.push(newProject);
  populateStorage();
  return newProject;
}

export function deleteProject(index) {
  projectList.splice(index, 1);
  populateStorage();
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