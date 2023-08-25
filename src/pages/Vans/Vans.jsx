import React, { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, defer, Await }  from "react-router-dom";
import { getVans } from "../../api.js"


export function loader() {
    return defer(
        {
            vans: getVans()
        }
    );
}



export default function Vans() {

    const [ searchParams, setSearchParams ] = useSearchParams();
    
    // const [ vans, setVans ] = React.useState([]);
    // const [ loading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState(null);
    
    const typeFilter = searchParams.get("type");

    const dataPromise  = useLoaderData();
    
    // React.useEffect(
    //     () => {
    //         // promise chaining method
    //         // fetch("/api/vans")
    //         //     .then(res => res.json())
    //         //     .then(data => setVans(data.vans));
            
    //         // // async await method
    //         // async function getVans(){
    //         //     const res = await fetch("/api/vans");
    //         //     const data = await res.json();
    //         //     setVans(data.vans);
    //         // }
    //         // getVans();


    //         async function loadVans() {
    //             setLoading(true)
    //             try {
    //                 const data = await getVans()
    //                 setVans(data);
    //             }
    //             catch(err){
    //                 setError(err)
    //             }
    //             finally{
    //                 setLoading(false)
    //             }
    //         }
    //         loadVans()
    //     },  []
    // );
   

    function handleFilterChange(key, value) {
        setSearchParams(
            prevSearchParams => {
                if(value == null){
                    prevSearchParams.delete(key);
                }
                else [
                    prevSearchParams.set(key, value)
                ]
                return prevSearchParams
            }
        )
    }

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    function renderVanElements(vans){

        const displayedVans = 
            typeFilter
            ? 
            vans.filter(van => van.type === typeFilter)
            : 
            vans;    

        const vanElements = displayedVans.map(
            van => (
                <div key={van.id} className="van-tile">
                    <Link 
                        to={van.id} 
                        state={{ 
                            search : `?${searchParams.toString()}`,
                            type: typeFilter

                        }}
                    >
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
        );

        return(
            <>
                <div className="van-list-filter-buttons">
                    <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={()=> handleFilterChange("type","simple")}>Simple</button>
                    <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={()=> handleFilterChange("type","rugged")}>Rugged</button>
                    <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={()=> handleFilterChange("type","luxury")}>Luxury</button>
                    
                    {
                        typeFilter
                        ?
                        <button className="van-type clear-filters" onClick={()=> handleFilterChange("type",null)}>Clear</button>
                        :
                        null
                    }
                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </>
        )
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={dataPromise.vans}>
                    { renderVanElements }
                </Await>
            </Suspense>
        </div>
    );
}