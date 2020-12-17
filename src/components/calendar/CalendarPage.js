// imports
import React from 'react'
import { CalendarForm } from './CalendarForm'
import { ApodProvider } from '../photos/PhotoProvider'
import { TagProvider } from '../tags/TagProvider'

export const CalendarPage = () => {

    return (
        <>
            <main>
                {/* <h1>Welcome to CalendarPage.js</h1> */}
                <h1>Astronomy Photo of the Day: Select a date.</h1>
            </main>
            <TagProvider>
                <ApodProvider>
                    <CalendarForm />
                </ApodProvider>
            </TagProvider>

        </>
    )
}

