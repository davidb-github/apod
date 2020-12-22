// imports
import React, { useState, useContext, useEffect } from "react"
import { TagContext } from '../tags/TagProvider'
import { ApodContext } from '../photos/PhotoProvider'

export const CategoryList = () => {

    const [selectedTag, setSelectedTag]             = useState(0)
    const [filteredPhotoTags, setFilteredPhotoTags] = useState([])

    const { tags, getTags, photoTags, getPhotoTagsExpand } = useContext(TagContext)
    const { photos, getPhotos, deletePhoto }               = useContext(ApodContext)

    // grab userId from localStorage
    const currentUser = parseInt(localStorage.getItem("app_user_id"))

    // onMount
    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        getPhotoTagsExpand()
    }, [])

       
    useEffect(() => {
        getPhotos(currentUser)
    }, [])


    useEffect(() => {
        //filter photos by tags assigned to photo
        const subset = photos.filter(photo => {
            // mapping all tags assigned to photo to the tags array
            let tags = photo.photoTags.map( photoTag => photoTag.tagId )
            // if selectedTag is included then add to subset array 
            return (tags.includes(selectedTag))
        })
        // call set hook and pass filtered array to populate filteredPhotoTags state
        setFilteredPhotoTags(subset)
    }, [selectedTag])

        return (
            <>
                <main>
                    <div>
                        {/* tag drop-down */}
                        <label htmlFor="tag-select">Choose a tag:</label>
    
                        <select name="tags" id="tag-select" onChange={(e) => { setSelectedTag(+e.target.value) }}>
                            <option value="0">--Choose/Remove tag filters--</option>
                                ${tags.map(tag => (<option key={tag.id} value={tag.id}>
                                {tag.tag}
                            </option>))}
                        </select>
                    </div>

                    <section>
                    {selectedTag !== 0
                        ? filteredPhotoTags.map(photo => {                          
                                return <>
                                    <div>
                                        <p key={photo.id} value={photo.id}>
                                            {/* ternary is true selectedTag !== 0  */}
                                            <img src={photo.imageUrl} alt="A favorited photo"></img>{<br />}
                                            Title: {photo.title}{<br />}
                                            Notes: {photo.noteText}{<br />}
                                        </p>
                                        <button
                                            onClick={() => {
                                                deletePhoto(photo.id)
                                            }}>
                                            Delete Photo</button>
                                    </div>
                                </>
                        })
                        : photos.map(photo => {
                                console.log(photo)                 
                            // photo = photo.photo
                            
                                return <>
                                    <div key={photo.id} value={photo.id}>
                                        <p>
                                        ternary is False                
                                            <img src={photo.imageUrl} alt="A favorited photo"></img>{<br />}
                                            Title: {photo.title}{<br />}
                                            Notes: {photo.noteText}{<br />}
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
            </>
        )
    }
 

    