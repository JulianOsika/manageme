
import {Routes, Route} from 'react-router-dom'
import { ProjectsPage } from "./pages/ProjectsPage";
import type { User } from './models/User';
import { HomePage } from "./pages/HomePage";
import { Navbar } from './components/Navbar';


export const App = () => {
  const userMock: User = {
    id: 0,
    name: "Jan",
    surname: "Kowalski"
  }

  return (
    <div className="container">
      <Navbar user={userMock}/>

    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}