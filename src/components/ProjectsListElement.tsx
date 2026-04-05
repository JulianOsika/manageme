import type { Project } from "../models/Project";
import { deleteProject } from "../project-store";

interface Props {
    project: Project
    onProjectDelete: () => void;
}

export const ProjectListElement = ({project, onProjectDelete} : Props) => {

    const handleDeleteProject = () => {
        deleteProject(project.id);
        onProjectDelete();
    }

    return (
        <div className="card mb-3 p-3">
            <div className="row align-items-center">
                <div className="col-8 col-md-9">
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                </div>
                <div className="col-4 col-md-3 d-flex justify-content-end">
                    <button className="btn btn-outline-danger btn-sm" onClick={handleDeleteProject}>
                        Usuń
                    </button>
                </div>
            </div>
        </div>
    )
}