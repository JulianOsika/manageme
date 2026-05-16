import type { Story } from "../models/Story";

const STORIES_KEY = 'manageme_stories';

const saveToLocalStorage = (stories: Story[]): void => {
  localStorage.setItem(STORIES_KEY, JSON.stringify(stories));
};

export const getStories = (): Story[] => {
  const data = localStorage.getItem(STORIES_KEY);
  return data ? JSON.parse(data) : [];
};

export const getStoryById = (id: string): Story | undefined => {
  const stories = getStories();
  const story = stories.find(s => s.id == id);
  return story;
}

export const getStoriesByProject = (projectId: string): Story[] => {
  const stories = getStories();
  const projectStries = stories.filter(s => s.projectId === projectId);
  return projectStries;
}

export const addStory = (
    name: string,
    description: string,
    priority: "low" | "medium" | "high",
    projectId: string,
    state: "todo" | "doing" | "done",
    ownerId: string
    ): void => {
  const stories = getStories();
  
  const newStory: Story = {
    id: crypto.randomUUID(),
    name,
    description,
    priority,
    projectId,
    creationDate: new Date(),
    state,
    ownerId
  };

  saveToLocalStorage([...stories, newStory]);
};

export const deleteStory = (id: string): void => {
    const stories = getStories();
    const remainigStories = stories.filter(s => s.id !== id);

    saveToLocalStorage(remainigStories);
}

export const updateStory = (newStory: Story): void => {
    const stories = getStories();

    const newStories = stories.map(s => {
        if(s.id === newStory.id){
            return newStory;
        }
        return s;
    });

    saveToLocalStorage(newStories);
}