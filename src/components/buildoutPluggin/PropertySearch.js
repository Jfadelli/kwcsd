import React, { useEffect } from 'react'
// import BuildOut from 'buildout'



const PropertySearch = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.type = "text/javascript"
        script1.src = "https://buildout.com/api.js?v8s";
        script1.async = true;


        document.body.appendChild(script1);

        return () => {
            document.body.removeChild(script1);
        }
    }, []);
    return (
        <div id="buildout" style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent:"center"}}>
        <h1 style={{display: "flex", alignItems:"center"}}> This Page is Currently Under Development</h1>

        <h2>Please Come Again Back Soon</h2>
        </div>
    );
}

export default PropertySearch;

