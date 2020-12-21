// imports
import React, {useContext} from 'react'
import { ApodProvider } from '../photos/PhotoProvider'
import { FavoritesList } from './FavoritesList'
import { CategoryList } from '../categories/CategoryList'

// , { useState, useContext, useEffect }


export const Favorites = () => {

    return (
        <>
            <main>
            {/* <h1>Welcome to FavoitesPage.js</h1>
            <p>build additional favpage components</p> */}

            </main>
            <ApodProvider>
                
                <CategoryList />
            </ApodProvider>
        </>
    )
}