import { useNavigate } from "react-router-dom"
import { deleteProject } from "../stores/project-store"

interface Props{
    projectId: string,
    onProjectsUpdate: () => void,
    setIsMenuOpen: (value: boolean) => void
}

export const ProjectMenu = ({projectId, onProjectsUpdate, setIsMenuOpen} : Props) => {
    const navigate = useNavigate();

    const handleDeleteProject = () => {
        deleteProject(projectId);
        onProjectsUpdate();
        setIsMenuOpen(false);
    }

    const handleEditProject = () => {
        navigate(`/project/${projectId}`, {state: { editing: true }});
        setIsMenuOpen(false);
    }

    return (
        <div 
            className="position-absolute end-0 mt-1 bg-white border rounded shadow-sm z-3" 
            style={{ minWidth: '120px' }}
        >
            <div className="d-flex flex-column p-1">
                <button
                    className="btn btn-sm btn-light text-start border-0 py-2 mb-1"
                    onClick={(e) => { e.stopPropagation(); handleEditProject(); }}
                >
                    Edytuj
                </button>

                <button
                    className="btn btn-sm btn-light text-start text-danger border-0 py-2"
                    onClick={handleDeleteProject}
                >
                    Usuń
                </button>
            </div>
        </div>
    )
}