// imports
import React, { useContext, useState, useEffect } from 'react'
import { ApodContext } from '../photos/PhotoProvider'



// useContext - one for get photos and one for photos that are gotten

// useEffect to call getPhotos
// access that context
// map through photos and place on DOM





export const FavoritesList = () => {

    const { photos, getPhotos } = useContext(ApodContext)
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
                                <div key={photo.id} value={photo.id}>
                                    <p key={photo.id}>
                                        Title: {photo.title}{"\n"}
                                        <img src={photo.imageUrl} alt="A favorited photo"></img>
                                    </p>
                                </div>
                            </>


                    })}
                </section>
            </main>
        </>
    )
}

{/* {photos.map(photo => <div key={photo.id} value={photo.id}>
                        <p key={photo.id}>
                            Title: {photo.title}{"\n"}
                            <img src={photo.imageUrl} alt="A favorited photo"></img>
                        </p>
                    </div>)} */}