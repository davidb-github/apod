// imports
import React from 'react'
import { ApodProvider } from './components/photos/PhotoProvider'
import { PhotoDetail } from './components/photos/PhotoDetail'

export const Home = () => {

    return (
        <>
            <main>
                {/* <h1>Welcome to Home.js</h1> */}
                <h1>Astronomy Picture of the Day</h1>

                <ApodProvider>
                    <PhotoDetail />
                </ApodProvider>
            </main>
        </>
    )
}

