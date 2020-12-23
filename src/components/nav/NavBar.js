import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/calendar">Calendar</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/favorites">Favorites</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="/" ><button onClick={() => {
                        // console.log("props", props)
                        localStorage.clear();
                        // props.history.push("/login")
                    }}>
                        Log Out
                    </button></Link>
                
            </li>
        </ul>
    )
}

