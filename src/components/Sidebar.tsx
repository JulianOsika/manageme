import { SideBarMenu } from "./SidebarMenu"
import { SideBarProjectsList } from "./SideBarProjectsList"
import type { Project } from "../models/Project"

interface Props{
    projects: Project[],
    onProjectsUpdate: () => void
}

export const SideBar = ({projects, onProjectsUpdate} : Props) => {
    return(
        <div className="border-end bg-secondary bg-opacity-10" style={{ minHeight: '100vh' }}>
            <SideBarMenu onProjectsUpdate={onProjectsUpdate}/>
            <SideBarProjectsList projects={projects} onProjectsUpdate={onProjectsUpdate}/>
        </div>
    )

}