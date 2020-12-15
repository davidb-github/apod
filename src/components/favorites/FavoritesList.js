// imports
import React, { useContext, useState, useEffect } from 'react'
import { ApodContext } from '../photos/PhotoProvider'

export const FavoritesList = () => {

    const { photos, getPhotos, deletePhoto } = useContext(ApodContext)
    // const { gotPhotos, getGotPhotos } = useContext(ApodContext)

    // store id for current user
    const currentUser = parseInt(localStorage.getItem("app_user_id"))

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <>
            <main>
                <h1>Welcome to FavoitesList.js</h1>
                <p>build additional FavoritesList components</p>
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
        </>
    )
}