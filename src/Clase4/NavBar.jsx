import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to={"/productos"} className="nav-link linkBK fs-5">Productos</Link>
            </li>
            <li className="nav-item">
                <Link to={"/mi-bk"} className="nav-link linkBK fs-5">Mi BK</Link>
            </li>
        </ul>
    )
}

export default NavBar