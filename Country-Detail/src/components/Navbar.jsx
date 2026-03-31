import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navigation">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/build" className="nav-link">
                Build Page
            </NavLink>
            <NavLink to="/about" className="nav-link">
                About This App
            </NavLink>
        </nav>
    )
}