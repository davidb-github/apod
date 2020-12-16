// import React, { useState, useContext, useEffect } from "react"
// import { ApodContext } from '../photos/PhotoProvider'

// export const CategoryList = () => {

//     const { photos, getPhotos, deletePhoto } = useContext(ApodContext)
    
//     // const [selectedTag, setSelectedTag] = useState("") //? string or int

//     // store id for current user
//     const currentUser = parseInt(localStorage.getItem("app_user_id"))

//     useEffect(() => {
//         getPhotos()
//     }, [])

//     return (
//         <>
//             <main>
//                 <h1>Welcome to CategoryList.js</h1>
                
//                 <section>
//                     {photos.map(photo => {
//                         // debugger
//                         if (photo.userId === currentUser)

//                             return <>
//                                 <div>
//                                     <p key={photo.id} value={photo.id}>
//                                         Title: {photo.title}{"\n"}
//                                         <img src={photo.imageUrl} alt="A favorited photo"></img>
//                                     </p>
//                                     <button
//                                         onClick={() => {
//                                             deletePhoto(photo.id)
//                                         }}>
//                                         Delete Photo</button>
//                                 </div>
//                             </>
//                     })}
//                 </section>
//             </main>
//         </>
//     )
// }