// imports
import React, { useContext, useState, useEffect } from 'react'
import { ApodContext } from '../photos/PhotoProvider'

export const FavoritesList = () => {

    const { photos, getPhotos, deletePhoto } = useContext(ApodContext)
    // const { gotPhotos, getGotPhotos } = useContext(ApodContext)

    // store id for current user
    const currentUser = parseInt(localStorage.getItem("app_user_id"))

    useEffect(() => {
        getPhotos(currentUser)
    }, [])

    return (
        <>
            <main>
                <section>
                    {photos.map(photo => {
                        // debugger
                        // if (photo.userId === currentUser)
                            return <>
                                <div key={photo.id} value={photo.id}>
                                    <p>
                                        Title: {photo.title}{"\n"}
                                        <img src={photo.imageUrl} alt="A favorited photo"></img>
                                    </p>
                                    <button
                                        onClick={() => { 
                                            console.log(photo.id)
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