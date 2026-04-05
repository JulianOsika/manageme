import { useState } from "react";
import { addProject } from "../project-store";

interface Props {
    onProjectAdded: () => void;
}

export const ProjectCreator = ({onProjectAdded}: Props) => {
    const [newName, setNewName] = useState<string>("");
    const [newDescription, setNewDescription] = useState<string>("");
    
    const handleAddProject = () =>{
        if (newName.trim() === "") return;
        addProject(newName, newDescription);
        onProjectAdded();
        setNewName("");
        setNewDescription("");
        
    }

    return(
        <div className="card p-3 mb-4">
        <h3>Dodaj nowy projekt</h3>
        <div className="mb-3">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Nazwa projektu"
            value={newName}
            onChange={(e) => setNewName(e.target.value)} 
            />
        </div>
        <div className="mb-3">
            <textarea 
            className="form-control" 
            placeholder="Opis projektu"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            />
        </div>
        <button className="btn btn-success" onClick={handleAddProject}>
            Dodaj projekt
        </button>
        </div>
    )

}

