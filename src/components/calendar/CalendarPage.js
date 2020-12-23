// imports
import React from 'react'
import { CalendarForm } from './CalendarForm'
import { ApodProvider } from '../photos/PhotoProvider'
import { TagProvider } from '../tags/TagProvider'

export const CalendarPage = () => {

    return (
        <>
            <TagProvider>
                <ApodProvider>
                    <CalendarForm />
                </ApodProvider>
            </TagProvider>

        </>
    )
}

