import { useParams, useLocation } from "react-router-dom"
import { getProjectById, setActiveProject, updateProject } from "../stores/project-store";
import { useState, useEffect } from "react";
import { StoryList } from "../components/StoryList";

interface Props{
    onProjectsUpdate: () => void;
}

export const ProjectPage = ({onProjectsUpdate} : Props) => {

    const { projectId } = useParams();
    const location = useLocation();

    useEffect(() => {
        if(projectId){
            setActiveProject(projectId);
        }

        if (location.state?.editing === true) {
            setIsEditing(true);
        }

    }, [location]);

    const project = getProjectById(projectId ?? "");

    const [isEditing, setIsEditing] = useState(location.state?.editing === true);
    const [newName, setNewName] = useState(project?.name ?? "");
    const [newDescription, setNewDescription] = useState(project?.description ?? "")

    const handleSaveEditProject = () => {
        if(!project) return;

        const updatedProject = {
            ...project,
            name : newName,
            description : newDescription
        }

        updateProject(updatedProject);
        onProjectsUpdate();
        setIsEditing(false);
    }

    const handleCancelEditProject = () => {
        setIsEditing(false);
        setNewName(project?.name ?? "")
        setNewDescription(project?.description ?? "");
    }

    if( projectId === undefined){
        return (
            <div>
                <h1>Nie znaleznio projektu</h1>
            </div>
        )
    }

    if(!project){
        return (
            <div>
                <h1>Nie znaleznio projektu</h1>
            </div>
        )
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Nazwa</label>
                        <input
                            className="form-control"
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Opis</label>
                        <textarea
                            className="form-control"
                            rows={4}
                            value={newDescription}
                            onChange={e => setNewDescription(e.target.value)}
                        />
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary" onClick={handleSaveEditProject}>
                            Zapisz projekt
                        </button>
                        <button className="btn btn-outline-secondary" onClick={handleCancelEditProject}>
                            Anuluj
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>{project.name}</h2>
                    <p className="text-muted">{project.description}</p>
                </div>
            )}

            <StoryList projectId={project.id}/>
        </div>
    )
}