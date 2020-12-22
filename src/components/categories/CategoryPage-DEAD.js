// // imports
// import React, { useState, useContext, useEffect } from "react"
// import { TagContext } from '../tags/TagProvider'
// import { ApodContext } from '../photos/PhotoProvider'

// export const Categories = () => {

//     const [selectedTag, setSelectedTag]             = useState(0)
//     const [filteredPhotos, setFilteredPhotos]       = useState([])
//     const [filteredPhotoTags, setFilteredPhotoTags] = useState([])

//     const { tags, getTags, photoTags, getPhotoTagsExpand } = useContext(TagContext)
//     const { photos, getPhotos, deletePhoto } = useContext(ApodContext)

//     const [bestestphotoTags, setPhotoTags] = useState([])

//     const currentUser = parseInt(localStorage.getItem("app_user_id"))

    
    

//     // onMount
//     useEffect(() => {
//         getTags()
//     }, [])

//     useEffect(() => {
//         getPhotoTagsExpand()
//     }, [])

//     useEffect(() => {
//         // console.log("setPhotTags ran:", photoTags)
//         setPhotoTags(photoTags)
//     }, [photoTags])
    
//     useEffect(() => {
//         getPhotos(currentUser)
//     }, [])

//     useEffect(() => {
//         console.log("filteredPhotos: ",filteredPhotos, currentUser, photoTags, 'oo', photoTags.filter(photoTag => photoTag.photo.userId === currentUser))
//         setFilteredPhotos(photoTags.filter(photoTag => photoTag.photo.userId === currentUser))
        
//     },[])

 
//     useEffect(() => {
//         const subset = filteredPhotos.filter(photoTag => photoTag.tagId === +selectedTag)
//         setFilteredPhotoTags(subset)
//     }, [selectedTag])

//         return (
//             <>
//                 <main>
//                     {/* <h1>CategoryPage.js will show the categories drop-down and search bar</h1> */}
    
//                     <div>
//                         {/* tag drop-down */}
//                         <label htmlFor="tag-select">Choose a tag:</label>
    
//                         <select name="tags" id="tag-select" onChange={(e) => { setSelectedTag(+e.target.value) }}>
//                             <option value="0">--Please choose an option--</option>
//                                 ${tags.map(tag => (<option key={tag.id} value={tag.id}>
//                                 {tag.tag}
//                             </option>))}
//                         </select>
//                     </div>
    
//                     <section>
//                     {selectedTag !== 0
//                         ? filteredPhotoTags.map(photo => {
                                                        
//                             photo = photo.photo
//                                 return <>
//                                     <div>
//                                         <p key={photo.id} value={photo.id}>
//                                             Title: {photo.title}{"\n"}
//                                             <img src={photo.imageUrl} alt="A favorited photo"></img>
//                                         </p>
//                                         <button
//                                             onClick={() => {
//                                                 deletePhoto(photo.id)
//                                             }}>
//                                             Delete Photo</button>
//                                     </div>
//                                 </>
//                         })
//                         : filteredPhotos.map(photo => {
                                                 
//                             photo = photo.photo
//                                 return <>
//                                     <div key={photo.id} value={photo.id}>
//                                         <p>
//                                             Title: {photo.title}{"\n"}
//                                             <img src={photo.imageUrl} alt="A favorited photo"></img>
//                                         </p>
//                                         <button
//                                             onClick={() => {
//                                                 deletePhoto(photo.id)
//                                             }}>
//                                             Delete Photo</button>
//                                     </div>
//                                 </>
//                         })}
//                     </section>
    
//                 </main>
//             </>
//         )
//     }
 

    