import { BsThreeDotsVertical } from "react-icons/bs";
import type { Project } from "../models/Project";
import { useState } from "react";
import { ProjectMenu } from "./ProjectMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { getActiveProject } from "../stores/project-store";

interface Props {
    project: Project,
    onProjectsUpdate: () => void
}

export const ProjectListElement = ({project, onProjectsUpdate}: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isActive = location.pathname.includes(project.id);
    const navigate = useNavigate();

    return (
        <div
            className={`p-3 border-bottom d-flex justify-content-between align-items-center ${isActive && "bg-primary bg-opacity-10"}`}
            onClick={() => {
                navigate(`/project/${project.id}`);
                onProjectsUpdate();
            }}
        >
            
            <span className="text-truncate fw-medium pe-2">
                {project.name}
            </span>
            
            <div className="position-relative">
                <button 
                    className="btn border-0 p-1 text-secondary d-flex justify-content-center align-items-center"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    <BsThreeDotsVertical size={18} />
                </button>

                {isMenuOpen && (
                    <>
                        <div 
                            className="position-fixed top-0 start-0 w-100 h-100" 
                            style={{ zIndex: 2 }}
                            onClick={ (e) => {e.stopPropagation(); setIsMenuOpen(false); }}
                        />
                        <ProjectMenu projectId={project.id} onProjectsUpdate={onProjectsUpdate} setIsMenuOpen={setIsMenuOpen}/> 
                    </>
                )}
            </div>
            
        </div>
    )
}