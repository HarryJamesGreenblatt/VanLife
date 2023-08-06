import { useLocation, useLoaderData, Link } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
    return getVans(params.id)
}


export default function VanDetail(){
    // const params = useParams();

    // const [van, setVan] = React.useState(null);

    const location = useLocation();

    const van = useLoaderData();

    // React.useEffect( () => {
    //     // promise chaining method
    //     // fetch(`/api/vans/${params.id}`)
    //     //     .then(res => res.json())
    //     //     .then(data => setVan(data.vans));
        
    //     // async await method
    //     async function getVans(){
    //         const res = await fetch(`/api/vans/${params.id}`);
    //         const data = await res.json();
    //         setVan(data.vans)
    //     }
    //     getVans();
    // },  [params.id])


    const search = location.state?.search || "";
    const type = location.state?.type || "all";


    return(
        <div className="van-detail-container">
            {
                van 
                ?
                <section>
                    <Link
                        to={`..${search}`}
                        relative="path"
                        className="back-button"
                    >
                        &larr; <span>Back to {type} vans</span>
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