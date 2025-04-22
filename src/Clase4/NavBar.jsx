import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../Clase5/context/ThemeContext"

const NavBar = () => {
    const {isDarkMode, setIsDarKMode} = useContext(ThemeContext);

    return (
        <div className="d-flex align-items-center">
            <ul className="nav">
                <li className="nav-item">
                    <Link to={"/productos"} className={`nav-link ${isDarkMode ? "text-danger" : "linkBK"} fw-bold fs-5`}>Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/mi-bk"} className={`nav-link ${isDarkMode ? "text-danger" : "linkBK"} fw-bold fs-5`}>Mi BK</Link>
                </li>
            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" onChange={() => {setIsDarKMode(isDarkMode ? false : true)}} checked={isDarkMode ? "checked" : ""} />
                <label className="form-check-label">Modo Oscuro</label>
            </div>
      </div>
    )
}

export default NavBar