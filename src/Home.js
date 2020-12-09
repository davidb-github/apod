// imports
import React, { useState, useContext, useEffect } from 'react'
import { ApodContext, ApodProvider } from './components/photos/PhotoProvider'
import { PhotoDetail } from './components/photos/PhotoDetail'

// will make call to apod API and display photo


export const Home = () => {

    return (
        <>
            <h1>Welcome to Astronomy Photo of the Day</h1>
            <p>build additional home components</p>
            <ApodProvider>
                <PhotoDetail />
            </ApodProvider>

        </>
    )
}

