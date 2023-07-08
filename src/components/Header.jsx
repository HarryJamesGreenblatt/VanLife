import { NavLink, Link } from "react-router-dom"

export default function Header(){
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "active-style" : null}
                >
                    Host
                </NavLink>

                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "active-style" : null}
                >
                    About
                </NavLink>
                
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "active-style" : null}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}