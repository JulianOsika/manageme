import type { Project } from "../models/Project";
import { ProjectListElement } from "./ProjectsListElement";

interface Props {
    projects: Project[],
    onProjectDelete: () => void
}

export const ProjectsList = ({projects, onProjectDelete} : Props) => {
    if (!projects) return <p>Ładowanie projektów...</p>;

    return (
        <div>
            {projects.map(project => (
                <ProjectListElement key={project.id} project={project} onProjectDelete={onProjectDelete}/>
            ))}
        </div>
    )
}