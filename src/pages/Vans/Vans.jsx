import React from "react";
import { Link }  from "react-router-dom";

export default function Vans() {

    const [vans, setVans] = React.useState([]);
    
    React.useEffect(
        () => {
            // promise chaining method
            // fetch("/api/vans")
            //     .then(res => res.json())
            //     .then(data => setVans(data.vans));
            
            // async await method
            async function getVans(){
                const res = await fetch("/api/vans");
                const data = await res.json();
                setVans(data.vans);
            }
            getVans();
        },  [])

        const vanElements = vans.map(
            van => (
                <div key={van.id} className="van-tile">
                    <Link to={`/vans/${van.id}`}>
                        <img src={van.imageUrl} className="van-image"/>
                        <div className="van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}<span>/day</span></p>
                        </div>
                        <i 
                            className={`van-type ${van.type} selected`}
                        >
                            {van.type}
                        </i>
                    </Link>
                </div>
            )
        )
    
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}