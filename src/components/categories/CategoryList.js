// imports
import React, { useState, useContext, useEffect } from "react"
import { TagContext } from '../tags/TagProvider'
import { ApodContext } from '../photos/PhotoProvider'
import Search from '../search/Search'
import FavoritesCard from "../card/FavoritesCard"
import { findAllByDisplayValue } from "@testing-library/react"

export const CategoryList = () => {

    const [selectedTag, setSelectedTag] = useState(0)
    const [filteredPhotoTags, setFilteredPhotoTags] = useState([])
    const [notification, setNotification] = useState({ visible: false, message: "" })

    const { tags, getTags, getPhotoTagsExpand } = useContext(TagContext)
    const { photos, getPhotos, deletePhoto, searchTerm } = useContext(ApodContext)

    const handleDeletePhoto = (id) => {
        deletePhoto(id)
        setNotification({visible: true, message: "Photo deleted: " + id})
        setTimeout(() => {
            setNotification({visible: false, message: ""})
        }, 2000)
    }

    // grab userId from localStorage
    const currentUser = parseInt(localStorage.getItem("app_user_id"))

    const filterByTag = (photos) => {
        return photos.filter(photo => {
            // mapping all tags assigned to photo to the tags array
            let tags = photo.photoTags.map(photoTag => photoTag.tagId)
            // if selectedTag is included then add to subset array 

            return (tags.includes(selectedTag))
        })
    }


    const filterByTerm = (photos) => {
        let lowerSearchTerm = ''
        let lowerPhotoTitle = ''

        return photos.filter(photo => {
            lowerSearchTerm = searchTerm.toLowerCase()
            lowerPhotoTitle = photo.title.toLowerCase()

            return lowerPhotoTitle.includes(lowerSearchTerm)
        })
    }


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


        if (selectedTag !== 0 && searchTerm !== "") {
            searchResults = filterByTerm(filteredPhotoTags)
        }
        else if (searchTerm === "" && selectedTag !== 0) {
            searchResults = filterByTag(photos)
        }
        else {
            searchResults = filterByTerm(photos)
        }
        setFilteredPhotoTags(searchResults)
    }, [searchTerm])


    useEffect(() => {
        //filter photos by tags assigned to photo
        const subset = filterByTag(photos)
        // call set hook and pass filtered array to populate filteredPhotoTags state
        setFilteredPhotoTags(subset)
    }, [selectedTag])

    return (
        <>
            <main className="mainContainer">
                { notification.visible
                    ? <div className="notification">
                        {notification.message}
                    </div>
                    :null
                }
                <div className="listContainer">
                    <div className="listActions">
                        {/* tag drop-down */}
                        <div className="listElement">
                            <select className="selectBox" name="tags" id="tag-select" onChange={(e) => { setSelectedTag(+e.target.value) }}>
                                <option value="0">--Choose/Remove tag filters--</option>
        ${tags.map(tag => (<option key={tag.id} value={tag.id}>
                                    {tag.tag}
                                </option>))}
                            </select>
                        </div>
                        <div className="listElement">
                            <Search />
                        </div>
                    </div>
                </div>


                <div className="container">
                    {selectedTag !== 0 || (searchTerm)
                        ? filteredPhotoTags.map(photo => {
                            return <FavoritesCard photo={photo} deletePhoto={handleDeletePhoto} />
                        })
                        : photos.map(photo => {
                            // console.log(photo)
                            return <FavoritesCard photo={photo} deletePhoto={handleDeletePhoto} />
                        })}
                </div>
            </main>
        </>
    )
}