import { NavLink } from "react-router-dom";

export default function HostVanDetailLayout() {
    return(
        <>
            <nav className="host-nav host-van-detail-nav">
                <NavLink 
                    to="."
                    end
                    className={({isActive}) => isActive ? "active-style" : null }
                >
                    Details
                </NavLink>

                <NavLink 
                    to="pricing"
                    className={({isActive}) => isActive ? "active-style" : null }
                >
                    Pricing
                </NavLink>

                <NavLink 
                    to="photos"
                    className={({isActive}) => isActive ? "active-style" : null }
                >
                    Photos
                </NavLink>
            </nav>
        </>
    )
}