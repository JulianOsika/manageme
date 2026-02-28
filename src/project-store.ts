import type { Project } from "./models/Project";

const STORAGE_KEY = 'manageme_projects';

const saveToLocalStorage = (projects: Project[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const getProjects = (): Project[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addProject = (name: string, description: string): void => {
  const projects = getProjects();
  
  const newProject: Project = {
    id: crypto.randomUUID(),
    name,
    description
  };

  saveToLocalStorage([...projects, newProject]);
};

export const deleteProject = (id: string): void => {
    const projects = getProjects();
    const remainigProjects = projects.filter(p => p.id !== id);

    saveToLocalStorage(remainigProjects);
}

export const updateProject = (newProject: Project): void => {
    const projects = getProjects();

    const newProjects = projects.map(p => {
        if(p.id === newProject.id){
            return newProject;
        }
        return p;
    });

    saveToLocalStorage(newProjects);
}