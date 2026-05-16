import { BsPlusLg } from "react-icons/bs"
import { useState } from "react"
import { ProjectCreator } from "./ProjectCreator";

interface Props{
    onProjectsUpdate: () => void;
}

export const SideBarMenu = ({onProjectsUpdate} : Props) => {
    const [isCreating, setIsCreating] = useState(false);
    const handleAddAndClose = () => {
        setIsCreating(false); // 1. Zamknij formularz
        onProjectsUpdate();   // 2. Odśwież listę w App.tsx
    }

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary-subtle bg-secondary bg-opacity-10">
                <h5 className="m-0 fw-bold">Projekty</h5>
                <button 
                    className="btn border-0 p-1 text-dark d-flex justify-content-center align-items-center icon-button-hover"
                    onClick={() => setIsCreating(!isCreating)}
                >
                    <BsPlusLg
                        style={{
                            transform: isCreating ? 'rotate(135deg)' : 'rotate(0deg)',
                            transition: 'transform 0.6s ease'
                        }}
                     />
                </button>
            </div>
            
            {isCreating && (
                <div className="p-3 bg-light border-bottom">
                    <ProjectCreator onProjectsUpdate={handleAddAndClose}/>
                </div>
            )}
        </div>
    )
}