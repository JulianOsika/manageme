import './style.css'

import { addProject, deleteProject, getProjects } from './project-store';

// addProject("Projekt Testowy", "Czy to działa?");
// addProject("Drugi Projekt", "Sprawdzam localStorage");

console.log("Wszystkie projekty:", getProjects());

deleteProject("2766288c-db9e-4024-a261-af86f0415a81");

console.log("Wszystkie projekty:", getProjects());

