import React from "react"

export default function Vans() {
    
    React.useEffect(
        () => {
            // promise chaining method
            fetch("/api/vans")
                .then(res => console.log(res))
                // .then(data => data.vans.map(
                //     van => console.log(van)
                // ));
            
            // async await method
            // async function getVans(){
            //     const res = await fetch("api/vans");
            //     const data = await res.json();
            //     data.vans.map(
            //         van => console.log(van)
            //     );
            // }
            // getVans();
        },
        []
    )
    
    return (
        <h1>Vans page goes here 🚐</h1>
    )
}