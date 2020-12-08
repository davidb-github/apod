//create empty array, fetch the API information, then make copy of that empty array.
import { useState } from "react"
import { keys } from "../Settings.js"


export const PhotosContext = React.createContext()
const [apod, setPhoto] = useState({})

const getApod = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=Y2aNOUmlb87yeRVuHaUBfwf0L25jF5H6rVqEO6bO")
        .then((response) => response.json())
        .then(setPhoto)
}

return (
    <PhotosContext.Provider value={
        {
            apod
        }
    }>
        {props.children}
    </PhotosContext.Provider>
)