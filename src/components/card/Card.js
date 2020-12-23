import React from 'react'
import '../../css/card.css'

export default function Card({ photo }) {
    return (
        <div className="card">
            <div className="card--details">
                <p><b>{photo.title}</b></p>
                <p>Date : {photo.date}</p>
                <p>Description:<br />{photo.explanation}</p>
            </div>
            <div className="card--image">
                {photo.media_type === 'video'
                    ? <div>
                        Note: The media for the seleted date is external video. <br />
                        External URL: <a href={photo.url} target="_blank">Click to see Youtube Video</a>
                      </div>

                    : <div>
                        <img src={photo.url} alt="apod"></img>
                        <p>Copyright: {photo.copyright}</p>
                    </div>
                }
            </div>
        </div >
    )
}