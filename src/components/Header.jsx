import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <Link className="link site-logo"  to="/">#VANLIFE</Link>
            <nav>
                <Link className="link" to="/host">Host</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/vans">Vans</Link>
            </nav>
      </header>
    )
}