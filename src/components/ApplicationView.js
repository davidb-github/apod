import React from "react"
import { Route } from "react-router-dom"
import { ApodProvider } from "./photos/PhotoProvider"
import { Home } from "../Home"
// calendar imports
import { Calendar } from './calendar/CalendarPage'

export const ApplicationViews = (props) => {
    return (
        <>
            <ApodProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <Home />
                </Route>
            </ApodProvider>

            <ApodProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route path="/calendar">
                    <Calendar />
                </Route>
            </ApodProvider>

        </>
    )
}