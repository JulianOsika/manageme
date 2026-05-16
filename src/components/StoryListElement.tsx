import type { Story } from "../models/Story"

interface Props{
    story: Story
}

export const StoryListElement = ({story}: Props) => {
    return (
        <div>
            <h3>{story.name}</h3>
        </div>
    )
}