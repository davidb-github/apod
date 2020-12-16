//create empty array, fetch the API information, then make copy of that empty array.
import React, { useState } from "react"


export const TagContext = React.createContext()

export const TagProvider = (props) => {

    const [tags, setTags] = useState([])
    const [photoTags, setPhotoTags] = useState([])

    
    const getTags = () => {
        return fetch('http://localhost:8088/tags')
            .then((response) => response.json())
            .then(setTags)
    }

    const getPhotoTags = () => {
        return fetch('http://localhost:8088/photoTags')
            .then((response) => response.json())
            .then(setPhotoTags)
    }

    const getPhotoTagsExpand = () => {
        return fetch('http://localhost:8088/photoTags?_expand=photo')
            .then((response) => response.json())
            .then(setPhotoTags)
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
                addPhotoTag, getPhotoTags, 
                photoTags, getPhotoTagsExpand
            }
        }>
            {props.children}
        </TagContext.Provider>
    )
} 