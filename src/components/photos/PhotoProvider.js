//create empty array, fetch the API information, then make copy of that empty array.
import React, { useState } from "react"
import { keys } from "../../Settings.js"



export const ApodContext = React.createContext()

export const ApodProvider = (props) => {
    // set state for ext API data
    const [apod, setApod] = useState({})

    const [apodByDate, setApodByDate] = useState({})
 
    // set state for local photo data
    const [photos, setPhotos] = useState([])


    const getApod = () => {
        return fetch(`https://api.nasa.gov/planetary/apod?api_key=${keys.apodKey}`)
            .then((response) => response.json())
            .then(setApod)
    }

    const getApodByDate = (date) => {
        return fetch(`https://api.nasa.gov/planetary/apod?&date=${date}&api_key=${keys.apodKey}`)
            .then((response) => response.json())
            .then(setApodByDate)
    }

    
    const getPhotos = (userId) => {
        return fetch(`http://localhost:8088/photos?user=${userId}`)
            .then(res => res.json())
            // .then(parsedPhotos => setPhotos(parsedPhotos) )
            .then(setPhotos)
    }

    // Add addPhoto component
    const addPhoto = (photo) => {
        return fetch('http://localhost:8088/photos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(photo)
        })
            // .then(getPhotos)
            // get response from json-server api so we can pull out the photo id for user 
            .then((response) => {
                getPhotos()
                return response.json()
            })
    }

    const deletePhoto = photoId => {
        return fetch(`http://localhost:8088/photos/${photoId}`, {
            method: "DELETE"
        })
            .then(getPhotos)
    }




    return (
        <ApodContext.Provider value={
            {
                apod  , setApod  , getApod,
                photos, setPhotos, getPhotos,
                addPhoto, getApodByDate, apodByDate,
                deletePhoto          
            }
        }>
            {props.children}
        </ApodContext.Provider>
    )
} 