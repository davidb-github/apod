import React from 'react'
import './favoritesCard.css'

export default function FavoritesCard({ photo, deletePhoto }) {
    return (
        <>
            <div key={photo.id} className="favoritesCard">
                <h3>{photo.title}</h3>
                <div className="image-container">
                    {/* ternary is true selectedTag !== 0  */}
                    <img src={photo.imageUrl} alt="A favorited photo"></img>{<br />}
                </div>
                <div className="noteContainer">
                    {photo.noteText}{<br />}
                </div>

                <button
                    className="btn-delete"
                    onClick={() => {
                        deletePhoto(photo.id)
                    }}>
                    Delete Photo</button>
            </div>
        </>
    )
}