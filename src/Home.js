// imports
import React, { useState, useContext, useEffect } from 'react'
import { ApodContext, ApodProvider } from './components/photos/PhotoProvider'
import { PhotoList } from './components/photos/PhotoList'

// will make call to apod API and display photo


export const Home = () => {
   
<ApodProvider>
    <PhotoList />
</ApodProvider>
    
    return (
    <> 
    <h1>Welcome to Astronomy Photo of the Day</h1>
    <p>build additional home components</p>
    
    </>
    )   
}

