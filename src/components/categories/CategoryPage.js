// imports
import React, { useState, useContext, useEffect } from "react"
import { TagContext } from '../tags/TagProvider'
import { ApodContext } from '../photos/PhotoProvider'

export const Categories = () => {

    const [selectedTag, setSelectedTag] = useState(0)
    const [filteredPhotos, setFilteredPhotos] = useState([])

    const { tags, getTags, photoTags, getPhotoTags } = useContext(TagContext)
    const { photos, getPhotos, deletePhoto } = useContext(ApodContext)

    const [bestestphotoTags, setPhotoTags] = useState([])

    const currentUser = parseInt(localStorage.getItem("app_user_id"))

    // onMount
    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        getPhotoTags()
    }, [])

    useEffect(() => {
        console.log("setPhotTags ran:", photoTags)
        setPhotoTags(photoTags)
    }, [photoTags])
    
    useEffect(() => {
        getPhotos()
    }, [])

   
    useEffect(() => {
        console.log("CatPage: selectedTag value: ", selectedTag)

        // if (selectedTag !== 0) {
        //     const subset = photoTags.filter(photoTag => )
        // }
    }, [selectedTag])

     if (bestestphotoTags) {
        return (
            <>
                <main>
                    <h1>CategoryPage.js will show the categories drop-down and search bar</h1>
    
                    <div>
                        {/* tag drop-down */}
                        <label htmlFor="tag-select">Choose a tag:</label>
    
                        <select name="tags" id="tag-select" onChange={(e) => { setSelectedTag(e.target.value) }}>
                            <option value="0">--Please choose an option--</option>
                                ${tags.map(tag => (<option key={tag.id} value={tag.id}>
                                {tag.tag}
                            </option>))}
                        </select>
                    </div>
    
                    <section>
                        {photos.map(photo => {
                            // debugger
                            if (photo.userId === currentUser)
    
                                return <>
                                    <div>
                                        <p key={photo.id} value={photo.id}>
                                            Title: {photo.title}{"\n"}
                                            <img src={photo.imageUrl} alt="A favorited photo"></img>
                                        </p>
                                        <button
                                            onClick={() => {
                                                deletePhoto(photo.id)
                                            }}>
                                            Delete Photo</button>
                                    </div>
                                </>
                        })}
                    </section>
    
                </main>
                {/* <ApodProvider>
                    <CategoryList />
                </ApodProvider> */}
            </>
        )
    }
    else {return <div></div>}
    }
 

    