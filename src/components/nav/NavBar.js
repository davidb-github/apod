import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">APOD Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/calendar">Calendar</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/favorites">Favorites</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Categories">Categories</Link>
            </li>
        </ul>
    )
}