import React, { useContext, useEffect } from "react"
import { ApodContext } from "./PhotoProvider"


export const PhotoDetail = () => {
    console.log("PhotoList....")
    
    // This state changes when `getApod()` is invoked below
    const { apod, getApod } = useContext(ApodContext)

  
    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect( () => {
        console.log("useEffect state:", apod)
        getApod()
    }, [] )


    return (
        <div className="apod">
            {
                console.log("PhotoList executed and we are inside the return", apod.title) && <h1>Hello World</h1>

            }
        </div>
    )
}

{/* {
            apod.copyright,
            apod.date,
            apod.explanation,
            apod.hrurl,
            apod.media_type,
            apod.service_version,
            apod.title,
            apod.url
        } */}