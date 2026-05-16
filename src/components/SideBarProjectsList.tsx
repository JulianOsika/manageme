import type { Project } from "../models/Project"
import { ProjectListElement } from "./ProjectsListElement"

interface Props {
    projects: Project[],
    onProjectsUpdate: () => void
}

export const SideBarProjectsList = ({projects, onProjectsUpdate} : Props) => {
    return(
        <div>
            {projects.map(project => (
                <ProjectListElement key={project.id} project={project} onProjectsUpdate={onProjectsUpdate}/>
            ))}         
        </div>
    )
}