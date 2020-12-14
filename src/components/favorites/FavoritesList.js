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

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <>
            <main>
                <h1>Welcome to FavoitesList.js</h1>
                <p>build additional FavoritesList components</p>
                <div>
                    {photos.map(photo => <p key={photo.id} value={photo.id}>{photo.title}</p> )}

                    {/* ${tags.map(tag => (<option 
                        key={tag.id} value={tag.id}> {tag.tag} 
                        </option>))} */}
                </div>
            </main>
        </>
    )
}