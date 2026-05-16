export interface Story{
    id: string,
    name: string,
    description: string,
    priority: "low" | "medium" | "high",
    projectId: string,
    creationDate: Date,
    state: "todo" | "doing" | "done",
    ownerId: string
}
