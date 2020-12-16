// imports
import React, { useState, useContext, useEffect } from "react"
import { TagContext } from '../tags/TagProvider'
import { ApodContext } from '../photos/PhotoProvider'

export const Categories = () => {

    const [selectedTag, setSelectedTag]             = useState(0)
    // const [filteredPhotos, setFilteredPhotos]       = useState([])
    const [filteredPhotoTags, setFilteredPhotoTags] = useState([])

    const { tags, getTags, photoTags, getPhotoTagsExpand } = useContext(TagContext)
    const { photos, getPhotos, deletePhoto } = useContext(ApodContext)

    const [bestestphotoTags, setPhotoTags] = useState([])

    const currentUser = parseInt(localStorage.getItem("app_user_id"))

    const filteredPhotos = photoTags.filter(photoTag => photoTag.photo.userId === currentUser)
    console.log("OOOOOOO",filteredPhotos)

    // onMount
    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        getPhotoTagsExpand()
    }, [])

    useEffect(() => {
        console.log("setPhotTags ran:", photoTags)
        setPhotoTags(photoTags)
    }, [photoTags])
    
    useEffect(() => {
        getPhotos(currentUser)
    }, [])

   
    useEffect(() => {
        // debugger
        console.log("CatPage: selectedTag value: ", selectedTag)
// debugger
        if (selectedTag !== 0) {
            // const subset = photoTags.filter(photoTag => photoTag.tagId === +selectedTag)
            const subset = filteredPhotos.filter(photoTag => photoTag.tagId === +selectedTag)
            // photoTags now have expanded photo object
            console.log("photoTagsExpanded: ", photoTags, subset)
            setFilteredPhotoTags(subset)
            

            
            
        }
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
 

    