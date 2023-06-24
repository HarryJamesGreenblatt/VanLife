import aboutImage from "../../public/about-hero.png";
import { Link } from "react-router-dom";

export default function About(){
    return(
        <div className="about-page--container">
            <img className="about-page--image" src={aboutImage}/>
            <div className="about-page--content">
                <h1>
                    Dont squeeze in a sedan when you can relax in a van.
                </h1>
                <p>
                    Our mission is to enliven your road trip to ensure your travel van rental. Our vans are recertified before each trip to ensure your travel plans go off without a hitch. ( Hitches cost extra 😉 )
                </p>
                <p>
                    Our team is full of vanflife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="about-page--cta">
                <h2>
                    Your destination is waiting.<br /> Your van is ready.
                </h2>
                <Link className="link-button" to="/vans">
                    Explore our vans
                </Link>
            </div>
        </div>
    )
}