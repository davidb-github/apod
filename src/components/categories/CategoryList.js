// imports
import React, { useState, useContext, useEffect } from "react"
import { TagContext } from '../tags/TagProvider'
import { ApodContext } from '../photos/PhotoProvider'
import Search from '../search/Search'

export const CategoryList = () => {

    const [selectedTag, setSelectedTag] = useState(0)
    const [filteredPhotoTags, setFilteredPhotoTags] = useState([])

    const { tags, getTags, getPhotoTagsExpand } = useContext(TagContext)
    const { photos, getPhotos, deletePhoto, searchTerm } = useContext(ApodContext)



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
        let searchResults
        let lowerSearchTerm = ''
        let lowerPhotoTitle = ''

        if (selectedTag !== 0 && searchTerm !== "") {
            searchResults = filteredPhotoTags.filter(photo => {
                console.log("PHOTO ", photo)
                lowerSearchTerm = searchTerm.toLowerCase()
                lowerPhotoTitle = photo.title.toLowerCase()

                return lowerPhotoTitle.includes(lowerSearchTerm)
            })
        }
        else if (searchTerm === "" && selectedTag !== 0) {
            searchResults = photos.filter(photo => {
                // mapping all tags assigned to photo to the tags array
                let tags = photo.photoTags.map(photoTag => photoTag.tagId)
                // if selectedTag is included then add to subset array 
                
                return (tags.includes(selectedTag))
            })
        }
        else {
            searchResults = photos.filter(photo => {
                lowerSearchTerm = searchTerm.toLowerCase()
                lowerPhotoTitle = photo.title.toLowerCase()

                return lowerPhotoTitle.includes(lowerSearchTerm)
            })
        }
        console.log("searchTerm: ", searchTerm)

        setFilteredPhotoTags(searchResults)
    }, [searchTerm])


    useEffect(() => {
        //filter photos by tags assigned to photo
        const subset = photos.filter(photo => {
            // mapping all tags assigned to photo to the tags array
            let tags = photo.photoTags.map(photoTag => photoTag.tagId)
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

                    <Search />

                </div>

                <section>
                    {selectedTag !== 0 || (searchTerm)
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
                            // console.log(photo)
                            return <>
                                <div className="photo" key={photo.id} value={photo.id}>
                                    <span className="photo--card">
                                        <img src={photo.imageUrl} alt="A favorited photo"></img>{<br />}
                                            Title: {photo.title}{<br />}
                                            Notes: {photo.noteText}{<br />}
                                    </span>
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


