import { Link, Outlet, useLoaderData } from "react-router-dom";
import HostVanDetailLayout from "../../components/HostVanDetailLayout";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";

export async function loader({params}){
    await requiredAuth()
    return getHostVans(params.id)
}
export default function HostVanDetail() {
    // const [currentVan, setCurrentVan] = React.useState(null);
    // const params = useParams();
    const currentVan = useLoaderData();

    // React.useEffect(() => {
    //     async function getVans() {
    //         const res = await fetch(`/api/host/vans/${params.id}`)
    //         const data = await res.json();
    //         setCurrentVan(data.vans);
    //     }
    //     getVans();
    // }, [params.id] );

    // console.log(currentVan);

    return(
        currentVan
        ?
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >
                &larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>{currentVan.price}/day</h4>
                    </div>
                </div>
                <HostVanDetailLayout />
                <Outlet context={{currentVan}}/>
            </div>
        </section>
        :
        <h2>Loading...</h2>
    )
}