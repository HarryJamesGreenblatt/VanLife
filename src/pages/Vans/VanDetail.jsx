import { useLocation, useLoaderData, Link, defer, Await } from "react-router-dom";
import { getVans } from "../../api";
import { Suspense } from "react";

export function loader({ params }) {
    return defer(
        {
            vans: getVans(  params.id  )
        }
    )
}


export default function VanDetail(){
    // const params = useParams();

    // const [van, setVan] = React.useState(null);

    const location = useLocation();

    const dataPromise = useLoaderData();

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


    function renderVanElement(van){
        
        const vanElement =  (

            <section key={van.id}>
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

        )

        return vanElement;

    }


    return(
        <div className="van-detail-container">
            <Suspense fallback={<h2>Loading van...</h2>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElement}
                </Await>
            </Suspense>
        </div>
    );
}