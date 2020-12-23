import React from 'react'

export default function FavoritesCard({ photo, deletePhoto }) {
    return (
        <>
            <div className="card">
                <p key={photo.id} value={photo.id}>
                    {/* ternary is true selectedTag !== 0  */}
                    <img src={photo.imageUrl} alt="A favorited photo"></img>{<br />}
                      Title: {photo.title}{<br />}
                      Notes: {photo.noteText}{<br />}
                </p>
                <button
                    onClick={() => {
                        deletePhoto(photo.id)
                    }}>
                    Delete Photo</button>
            </div>
        </>
    )
}