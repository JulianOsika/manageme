import { ProjectsList } from "../components/ProjectsList"
import { getProjects } from "../project-store"
import type { Project } from "../models/Project"
import { useState } from "react"
import { ProjectCreator } from "../components/ProjectCreator"

export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>(getProjects());

    const RefreshList = () =>{
        setProjects(getProjects());
    }

    return (
        <div>
            <ProjectCreator onProjectAdded={RefreshList}/>
            <h1>Projekty</h1>
            <ProjectsList projects={projects} onProjectDelete={RefreshList}/>
        </div>
    )
}