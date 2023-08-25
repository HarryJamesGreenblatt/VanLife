import { Link, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import HostVanDetailLayout from "../../components/HostVanDetailLayout";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";
import { Suspense } from "react";


export async function loader({params}){
    await requiredAuth()
    return defer(
        { 
            vans: getHostVans(params.id) 
        }
    );
}


export default function HostVanDetail() {
    // const [currentVan, setCurrentVan] = React.useState(null);
    // const params = useParams();
    const dataPromise = useLoaderData();

    // React.useEffect(() => {
    //     async function getVans() {
    //         const res = await fetch(`/api/host/vans/${params.id}`)
    //         const data = await res.json();
    //         setCurrentVan(data.vans);
    //     }
    //     getVans();
    // }, [params.id] );

    // console.log(currentVan);

    function renderVanElement(currentVan){

        const vanElement = (
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
        )

        return vanElement;

    }

    return(
        <Suspense fallback={<h2>Loading van...</h2>}>
            <Await resolve={dataPromise.vans}>
                {renderVanElement}
            </Await>
        </Suspense>
    )
}