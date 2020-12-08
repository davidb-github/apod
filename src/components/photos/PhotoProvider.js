//create empty array, fetch the API information, then make copy of that empty array.
import React, { useState } from "react"
import { keys } from "../../Settings.js"


export const ApodContext = React.createContext()

export const ApodProvider = (props) => {
    const [apod, setApod] = useState({})

    const getApod = () => {
        return fetch("https://api.nasa.gov/planetary/apod?api_key=Y2aNOUmlb87yeRVuHaUBfwf0L25jF5H6rVqEO6bO")
            .then((response) => response.json())
            .then(setApod)
    }

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