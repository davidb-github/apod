import React from "react"
import { Route } from "react-router-dom"
import { ApodProvider } from "./photos/PhotoProvider"
import { Home } from "../Home"
// calendar imports
import { Calendar } from './calendar/CalendarPage'
// favorite import
import { Favorites } from './favorites/FavoritesPage'

export const ApplicationViews = (props) => {
    return (
        <>
            <ApodProvider>
                {/* Render the Home page when http://localhost:3000/ */}
                <Route exact path="/">
                    <Home />
                </Route>
            </ApodProvider>

            <ApodProvider>
                {/* Render the calendarpage when http://localhost:3000/calendar */}
                <Route path="/calendar">
                    <Calendar />
                </Route>
            </ApodProvider>

            <ApodProvider>
                {/* Render the calendarpage when http://localhost:3000/calendar */}
                <Route path="/favorites">
                    <Favorites />
                </Route>
            </ApodProvider>

        </>
    )
}