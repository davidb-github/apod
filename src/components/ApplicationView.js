import React from "react"
import { Route } from "react-router-dom"
import { ApodProvider } from "./photos/PhotoProvider"
import { Home } from "../Home"

export const ApplicationViews = (props) => {
    return (
        <>
            <ApodProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <Home />
                </Route>
            </ApodProvider>

        </>
    )
}