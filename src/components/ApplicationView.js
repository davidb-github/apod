import React from "react"
import { Route } from "react-router-dom"
import { ApodProvider } from "./photos/PhotoProvider"
import { Home } from "../Home"
import { CalendarPage } from './calendar/CalendarPage'
import { Favorites } from './favorites/FavoritesPage'
// import { Categories } from "./categories/CategoryPage"
import { CategoryList } from "./categories/CategoryList"
import { TagProvider } from './tags/TagProvider'

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
                {/* Render the calendar page when http://localhost:3000/calendar */}
                <Route path="/calendar">
                    <CalendarPage />
                </Route>
            </ApodProvider>

            <ApodProvider>
                <TagProvider>
                    {/* Render the favorites page when http://localhost:3000/favorites */}
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                </TagProvider>
            </ApodProvider>
        </>
    )
}
