import {Routes, Route} from 'react-router-dom'
import type { User } from './models/User';
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from './pages/ProjectPage';
import { Navbar } from './components/Navbar';
import { SideBar } from './components/Sidebar';
import { getProjects } from './stores/project-store';
import { useState } from 'react';


export const App = () => {
  const userMock: User = {
    id: 0,
    name: "Jan",
    surname: "Kowalski"
  }

  const [projects, setProjects] = useState(getProjects());

  const refreshProjects = () => {
    setProjects([...getProjects()]);
  }

  return (
    <div>
      <Navbar user={userMock}/>

      <div className="container-fluid">
        <div className='row'>
          <div className='col-3 p-0'>
            <SideBar projects={projects} onProjectsUpdate={refreshProjects}/>
          </div>
          <div className='col-9 p-4'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:projectId" element={<ProjectPage onProjectsUpdate={refreshProjects}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}