import type { User } from "../models/User"
import appLogo from '../assets/navbar-logo.png'
import { NavLink } from "react-router-dom"

interface Props{
    user: User
}

export const Navbar = ({user}: Props) => {

    return (
        <nav className="navbar navbar-light bg-light px-4 mb-4 shadow-sm">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                
                <div>
                    <NavLink to="/">
                        <img src={appLogo} alt="ManageMe Logo" height="50" />
                    </NavLink>
                    
                    <NavLink 
                        to="/projects"
                        className={({ isActive }) => isActive ? "text-decoration-none fw-bold text-primary" : "text-decoration-none text-dark"}
                    >Projekty</NavLink>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <p className="m-0">{user.name} {user.surname}</p>
                    <img 
                        src={`https://ui-avatars.com/api/?name=${user.name}+${user.surname}&background=random`}
                        alt="Profil" 
                        className="rounded-circle"
                        width="40" 
                        height="40"
                    />
                </div>
                
            </div>
        </nav>
    )
}