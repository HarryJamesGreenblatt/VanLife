import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className="home-container">
            <h1>
                You got the travel vans, we got the travel vans.
            </h1>
            <p>
                Add adventure to yuor life by joining the #vanlife movement. Rent the perfect van to make your perfect roadtrip.
            </p>
            <Link to="vans">Find your van</Link>
        </div>
    )
}