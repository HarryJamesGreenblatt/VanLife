import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api.js";
import { requiredAuth } from "../../utils.js";


export async function loader() {
    await requiredAuth();
    return getHostVans();
}


export default function HostVans() {
    // const [vans, setVans] = React.useState([]);
    const vans = useLoaderData();


    // React.useEffect( () => {
    //     // promise chaining method
    //     // fetch(`/api/host/vans`)
    //     //     .then(res => res.json())
    //     //     .then(data => setVans(data.vans));
        
    //     // async await method
    //     async function getVans(){
    //         const res = await fetch(`/api/host/vans`);
    //         const data = await res.json();
    //         setVans(data.vans);
    //     }
    //     getVans();
    // },  [])


    const hostVanEls = vans.map( van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))


    return(
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0
                    ?
                    <section> 
                        {hostVanEls}
                    </section>
                    :
                    <h2>Loading...</h2>
                }
            </div>
        </section>
    )
}