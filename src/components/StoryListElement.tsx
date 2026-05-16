import { useState } from "react"
import type { Story } from "../models/Story"
import { BsChevronUp, BsChevronDown } from "react-icons/bs"
import { deleteStory, updateStory } from "../stores/story-store"

interface Props{
    story: Story,
    refreshStories: () => void
}

export const StoryListElement = ({story, refreshStories}: Props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(story.name);
    const [newDescription, setNewDescription] = useState(story.description);
    const [newPriority, setNewPriority] = useState<'low'|'medium'|'high'>(story.priority);
    const [newState, setNewState] = useState<"todo" | "doing" | "done">(story.state);
    

    const handleDeleteStory = () => {
        deleteStory(story.id);
        refreshStories();
    }

    const handleStartEditing = () => {
        setNewName(story.name);
        setNewDescription(story.description);
        setNewPriority(story.priority);
        setNewState(story.state)
        setIsEditing(true);
        setIsExpanded(true);
    }

    const handleEditStory = () => {
        const updatedStory = {
            ...story,
            name : newName,
            description : newDescription,
            priority : newPriority,
            state: newState
        }

        updateStory(updatedStory);

        refreshStories();
        setNewName("");
        setNewDescription("");
        setNewPriority("low");
        setNewState("todo")
        setIsEditing(false);

    }

    const handleCancelEditStory = () => {
        setNewName("");
        setNewDescription("");
        setNewPriority("low");
        setNewState("todo")
        setIsEditing(false);
    }

    const priorityClass = {
        low: 'bg-success',
        medium: 'bg-warning text-dark',
        high: 'bg-danger'
    }[story.priority];

    const prioritySelectClass = {
        low: 'bg-success text-white',
        medium: 'bg-warning text-dark',
        high: 'bg-danger text-white'
    }[newPriority];

    const stateClass = {
        todo: 'bg-success',
        doing: 'bg-warning text-dark',
        done: 'bg-danger'
    }[story.state];

    const stateSelectClass = {
        todo: 'bg-outline-success text-white',
        doing: 'bg-warning text-dark',
        done: 'bg-danger text-white'
    }[newState];

    return (
        <div className="mb-3">
            {isEditing ? (
                <div className="d-flex justify-content-between align-items-center p-3 border rounded bg-secondary bg-opacity-10">
                    <div className="mb-1">
                        <input
                            className="form-control"
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-1 border rounded">
                        <div className="mb-1">
                            <label className="text-muted m-1">Priorytet</label>
                            <select
                                className={`form-select-sm ${prioritySelectClass} p-1`}
                                value={newPriority}
                                onChange={e => setNewPriority(e.target.value as 'low'|'medium'|'high')}>
                                <option value="low">Niski</option>
                                <option value="medium">Średni</option>
                                <option value="high">Wysoki</option>
                            </select>
                        </div>
                        <div className="mb-1">
                            <label className="text-muted m-1">Status</label>
                            <select
                                className={`form-select-sm ${stateSelectClass} p-1`}
                                value={newState}
                                onChange={e => setNewState(e.target.value as 'todo'|'doing'|'done')}>
                                <option value="todo">todo</option>
                                <option value="doing">doing</option>
                                <option value="done">done</option>
                            </select>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center p-2 border rounded bg-secondary bg-opacity-10"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <span className="fw-semibold">{story.name}</span>

                    <div className="d-flex gap-2 align-items-center p-1">
                        <div className="ps-1 border rounded">
                            <label className="text-muted">Priorytet</label>
                            <span className={`badge ${priorityClass} m-2`}>{story.priority}</span>
                            <label className="text-muted">Status</label>
                            <span className={`badge ${stateClass} m-2`}>{story.state}</span>
                        </div>
                        
                        {isExpanded ? <BsChevronUp className="ms-2"/> : <BsChevronDown className="ms-2"/>}
                    </div>
                </div>
            )}

            

            {isExpanded && (
                <div>
                    {isEditing ? (
                        <div className="p-3 border border-top-0 rounded-bottom">
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
                                <button className="btn btn-outline-primary" onClick={handleEditStory}>
                                    Zapisz zmiany
                                </button>
                                <button className="btn btn-outline-secondary" onClick={handleCancelEditStory}>
                                    Anuluj
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="p-3 border border-top-0 rounded-bottom">
                            <div className="d-flex gap-2 mb-3">
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={handleStartEditing}
                                >
                                    Edytuj
                                </button>

                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={handleDeleteStory}
                                >
                                    Usuń
                                </button>
                            </div>
                            <p className="text-muted mb-2">{story.description}</p>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}