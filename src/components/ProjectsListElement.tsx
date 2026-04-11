import { useState } from "react";
import type { Project } from "../models/Project";
import { deleteProject } from "../project-store";
import { updateProject } from "../project-store";

interface Props {
    project: Project
    onProjectsChange: () => void;
}

export const ProjectListElement = ({project, onProjectsChange} : Props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState<string>(project.name);
    const [editDescription, setEditDescription] = useState<string>(project.description);

    const handleDeleteProject = () => {
        deleteProject(project.id);
        onProjectsChange();
    }

    const handleEditProject = () => {
        const editProject: Project = {
            ...project,
            name: editName,
            description: editDescription
        }
        updateProject(editProject);
        setIsEditing(false);
        onProjectsChange();
    }

    const cancelEditing = () => {
        setIsEditing(false);
    }

    const turnOnEditMode = () => {
        setIsEditing(true);
    }
    
    if(!isEditing){
        return (
            <div className="card mb-3 p-3">
                <div className="row align-items-center">
                        <div className="col-8 col-md-9">
                            <h5>{project.name}</h5>
                            <p>{project.description}</p>
                        </div>
                        <div className="col-4 col-md-3 d-flex gap-2 justify-content-end">
                            <button className="btn btn-success btn-sm" onClick={turnOnEditMode}>
                                Edytuj
                            </button>
                            <button className="btn btn-outline-danger btn-sm" onClick={handleDeleteProject}>
                                Usuń
                            </button>
                        </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="card mb-3 p-3">
                <div className="row align-items-center">
                        <div className="col-8 col-md-9">
                            <input 
                            type="text" 
                            className="form-control" 
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)} 
                            />
                            <input 
                            type="text" 
                            className="form-control" 
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)} 
                            />
                        </div>
                        <div className="col-4 col-md-3 d-flex gap-2 justify-content-end">
                            <button className="btn btn-success btn-sm" onClick={handleEditProject}>
                                Zapisz
                            </button>
                            <button className="btn btn-outline-danger btn-sm" onClick={cancelEditing}>
                                Anuluj
                            </button>
                        </div>
                </div>
            </div>
        )
    }
}