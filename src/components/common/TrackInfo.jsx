import React from 'react';

function TrackInfo({ title, artist }) {
    return (
        <div className="track-info">
            <div className="title">{title}</div>
            <div className="artist">{artist}</div>
        </div>
    );
}

export default TrackInfo;
