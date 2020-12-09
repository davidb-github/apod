import React from "react"
import { Route } from "react-router-dom"
import { ApodProvider } from "./photos/PhotoProvider"
import { Home } from "../Home"

import { Calendar } from './calendar/CalendarPage'

import { Favorites } from './favorites/FavoritesPage'

import { Categories } from "./categories/CategoryPage"

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
                    <Calendar />
                </Route>
            </ApodProvider>

            <ApodProvider>
                {/* Render the favorites page when http://localhost:3000/favorites */}
                <Route path="/favorites">
                    <Favorites />
                </Route>
            </ApodProvider>

            <ApodProvider>
                {/* Render the categories elements on the favorites page when http://localhost:3000/categories */}
                <Route path="/categories">
                    <Categories />
                    <Favorites />
                </Route>
            </ApodProvider>

        </>
    )
}