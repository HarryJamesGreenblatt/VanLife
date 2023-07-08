import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return(
        <>
            <nav className="host-nav">
                <NavLink 
                    to="."
                    end
                    className={({isActive}) => isActive ? "active-style" : null }
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="income"
                    className={({isActive}) => isActive ? "active-style" : null }
                >
                    Income
                </NavLink>

                <NavLink 
                    to="vans"
                    className={({isActive}) => isActive ? "active-style" : null }
                >
                    Vans
                </NavLink>

                <NavLink 
                    to="reviews"
                    className={({isActive}) => isActive ? "active-style" : null }
                >
                    Reviews
                </NavLink>

            </nav>
            <Outlet/>
        </>
    )
}