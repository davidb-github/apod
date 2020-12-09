//create empty array, fetch the API information, then make copy of that empty array.
import React, { useState } from "react"
// import { keys } from "../../Settings.js"


export const ApodContext = React.createContext()
// should I use empty array or object since the API returns a single object per given date
export const ApodProvider = (props) => {
    const [apod, setApod] = useState({})

    
    const getApod = () => {
        return fetch("https://api.nasa.gov/planetary/apod?api_key=Y2aNOUmlb87yeRVuHaUBfwf0L25jF5H6rVqEO6bO")
            .then((response) => response.json())
            .then(setApod)
    }

    // Add create call to local json-server
    

    return (
        <ApodContext.Provider value={
            {
                apod, setApod, getApod
            }
        }>
            {props.children}
        </ApodContext.Provider>
    )
} 