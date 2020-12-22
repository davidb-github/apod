// imports
import React from 'react'
import { ApodProvider } from '../photos/PhotoProvider'
import { CategoryList } from '../categories/CategoryList'

export const Favorites = () => {

    return (
        <>
            <main>
            {/* Do I move the provider and function calls into main? */}
            </main>
            <ApodProvider>
                <CategoryList />
            </ApodProvider>
        </>
    )
}