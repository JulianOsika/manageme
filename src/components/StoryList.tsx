import { getStoriesByProject } from "../stores/story-store"
import { StoryListElement } from "./StoryListElement";

interface Props{
    projectId: string
}

export const StoryList = ({projectId}:Props) => {

    const stories = getStoriesByProject(projectId);

    return (
        <div>
            <h4>Historyjki</h4>
            {stories.map(story => (
                <StoryListElement key={story.id} story={story}/>
            ))}         
        </div>
    )
}