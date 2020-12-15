import React from "react"
import { Route } from "react-router-dom"
import { ApodProvider } from "./photos/PhotoProvider"
import { Home } from "../Home"
import { CalendarPage } from './calendar/CalendarPage'
import { Favorites } from './favorites/FavoritesPage'
import { Categories } from "./categories/CategoryPage"
import { TagProvider } from './tags/TagProvider'

export const ApplicationViews = (props) => {
    return (
        <>
            <ApodProvider>
                {/* Render the Home page when http://localhost:3000/ */}
                <Route exact path="/">
                    <button onClick={() => {
                        localStorage.clear();
                        // props.history.push("login")
                    }}>
                        Log Out
                    </button>
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
                {/* Render the favorites page when http://localhost:3000/favorites */}
                <Route path="/favorites">
                    <Favorites />
                </Route>
            </ApodProvider>

            <ApodProvider>
                <TagProvider>
                    {/* Render the categories elements on the favorites page when http://localhost:3000/categories */}
                    <Route path="/categories">
                        <Categories />
                        <Favorites />
                    </Route>
                </TagProvider>
            </ApodProvider>
        </>
    )
}
