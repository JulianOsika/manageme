import { addProject } from "../stores/project-store";
import { useState } from "react";

interface Props {
    onProjectsUpdate: () => void;
}

export const ProjectCreator = ({onProjectsUpdate}: Props) => {
    const [newName, setNewName] = useState<string>("");
    
    const handleAddProject = () =>{
        if (newName.trim() === "") return;
        addProject(newName, "");
        onProjectsUpdate();
        setNewName("");
    }

    return(
        <div className="p-0">
            <div className="mb-2">
                <input 
                    type="text" 
                    className="form-control form-control-sm shadow-none" 
                    placeholder="Nazwa projektu..."
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)} 
                    autoFocus
                />
            </div>

            <button 
                className="btn btn-sm btn-primary w-100 fw-bold" 
                onClick={handleAddProject}
            >
                Zapisz projekt
            </button>
        </div>
    )
}