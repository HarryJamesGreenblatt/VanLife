import React from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetail(){
    const params = useParams();
    const [van, setVan] = React.useState(null);

    React.useEffect( () => {
        // promise chaining method
        // fetch(`/api/vans/${params.id}`)
        //     .then(res => res.json())
        //     .then(data => setVan(data.vans));
        
        // async await method
        async function getVans(){
            const res = await fetch(`/api/vans/${params.id}`);
            const data = await res.json();
            setVan(data.vans)
        }
        getVans();
    },  [params.id])


    return(
        <div className="van-detail-container">
            {
                van 
                ?
                <section>
                    <Link
                        to=".."
                        relative="path"
                        className="back-button"
                    >
                        &larr; <span>Back to all vans</span>
                    </Link>
                    <div className="van-detail">
                        <img src={van.imageUrl} className="van-image"/>
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price">${van.price}<span>/day</span></p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </section>
                :
                <h2>Loading...</h2>
            }

        </div>
    )
}