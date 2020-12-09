// imports
import React, { useState, useContext, useEffect } from 'react'
import { ApodContext, ApodProvider } from './components/photos/PhotoProvider'
import { PhotoDetail } from './components/photos/PhotoDetail'

// will make call to apod API and display photo


export const Home = () => {

    return (
        <>
            <main>
            <h1>Welcome to Home.js</h1>
            <h1>Astronomy Picture of the Day</h1>
            <p>build additional home components</p>

            </main>
            
            <ApodProvider>
                <PhotoDetail />
            </ApodProvider>

        </>
    )
}

