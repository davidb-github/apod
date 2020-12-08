import React, { useContext, useEffect } from "react"
import { ApodContext } from "./PhotoProvider"

console.log("here in PhotoList.js")


export const PhotoList = () => {
    // This state changes when `getLocations()` is invoked below
    const { apod, getApod } = useContext(ApodContext)

  
    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect( () => {
        console.log("PhotoList: Initial render before data")
        getApod()
    }, {})

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("PhotoList: Location state changed")
        console.log(apod)
    }, [apod])

    return (
        <div className="apod">
        {
            apod.copyright,
            apod.date,
            apod.explanation,
            apod.hrurl,
            apod.media_type,
            apod.service_version,
            apod.title,
            apod.title,
            apod.url
        }
        </div>
    )
}