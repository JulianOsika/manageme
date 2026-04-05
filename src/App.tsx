
import {Routes, Route} from 'react-router-dom'
import { ProjectsPage } from "./pages/ProjectsPage";
import { HomePage } from "./pages/HomePage";


export const App = () => {

  return (
    <div className="container">
      <nav>
        <h4>ManageMe</h4>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}