import { addStory, getStoriesByProject } from "../stores/story-store"
import { StoryListElement } from "./StoryListElement";
import { useState } from "react";

interface Props{
    projectId: string
}

export const StoryList = ({projectId}:Props) => {

    const [stories, setStories] = useState(getStoriesByProject(projectId));
    const [isAdding, setIsAdding] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newPriority, setNewPriority] = useState<'low'|'medium'|'high'>('low');
    const [filter, setFilter] = useState<"all" |"todo" | "doing" | "done">("all");

    const filteredStories = filter === 'all' 
        ? stories 
        : stories.filter(s => s.state === filter);

    const handleAddClick = () => {
        setIsAdding(true);
    }

    const handleAddStory = () => {
        addStory(
            newName,
            newDescription,
            newPriority,
            projectId,
            "todo",
            "1"
        )
        setStories(getStoriesByProject(projectId));
        setNewName("");
        setNewDescription("");
        setNewPriority("low");
        setIsAdding(false);
    }

    const handleCancelAddStory = () => {
        setNewName("");
        setNewDescription("");
        setNewPriority("low");
        setIsAdding(false);
    }

    return (
        <div className="p-3 border rounded">
            <h4 className="mb-3">Historyjki</h4>
                <div className="btn-group mb-3">
                    <button className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilter('all')}>Wszystkie</button>
                    <button className={`btn btn-sm ${filter === 'todo' ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilter('todo')}>todo</button>
                    <button className={`btn btn-sm ${filter === 'doing' ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilter('doing')}>doing</button>
                    <button className={`btn btn-sm ${filter === 'done' ? 'btn-primary' : 'btn-outline-secondary'}`}
                        onClick={() => setFilter('done')}>done</button>
                </div>
            {isAdding ? (
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
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Priorytet</label>
                        <select
                            className="form-control"
                            value={newPriority}
                            onChange={e => setNewPriority(e.target.value as 'low'|'medium'|'high')}>
                            <option value="low">Niski</option>
                            <option value="medium">Średni</option>
                            <option value="high">Wysoki</option>
                        </select>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary" onClick={handleAddStory}>
                            Zapisz
                        </button>
                        <button className="btn btn-outline-secondary" onClick={handleCancelAddStory}>
                            Anuluj
                        </button>
                    </div>
                </div>
            ) : (
                <div className="d-flex flex-column align-items-start gap-2 mb-3">

                    <button
                        className="btn btn-primary"
                        onClick={handleAddClick}
                    >
                        Dodaj historyjkę
                    </button>
                </div>
            )}

            <hr className="text-muted"/>

            {filteredStories.map(story => (
                <StoryListElement key={story.id} story={story} refreshStories={() => setStories(getStoriesByProject(projectId))} />
            ))}
        </div>
    )
}