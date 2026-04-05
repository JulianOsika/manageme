import { Link } from "react-router-dom"

export const HomePage = () => {
    return(
        <div className="container">
            <h1>Strona główna</h1>
            <h3>Projekt zaliczeniowy</h3>
            <p>Autor: Julian Osika</p>
            
            <Link to="/projects">Pokaż projekty</Link>
        </div>
    )
}