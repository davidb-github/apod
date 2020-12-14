//create empty array, fetch the API information, then make copy of that empty array.
import React, { useState } from "react"


export const TagContext = React.createContext()

export const TagProvider = (props) => {
    const [tags, setTags] = useState([])

    
    const getTags = () => {
        return fetch('http://localhost:8088/tags')
            .then((response) => response.json())
            .then(setTags)
    }

    // add addTag 
    const addPhotoTag = (photoTag) => {
        return fetch('http://localhost:8088/photoTags', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(photoTag)
        })
            .then(getTags)
    }

      

    return (
        <TagContext.Provider value={
            {
                tags, setTags, getTags,
                addPhotoTag
            }
        }>
            {props.children}
        </TagContext.Provider>
    )
} 