import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Song = ({ song, isPlaying, onPlay, onPause }) => {
    const { title, artist, cover, url } = song;
    const handlePlayPause = () => {
        if (isPlaying) {
            onPause();
        } else {
            onPlay(url);
        }
    };

    return (
        <div className="flex items-center p-4 rounded bg-gray-100 shadow-sm min-w-[300px] max-w-[350px] mb-4">
            <div className="relative w-24 h-24 mr-4 group">
                <img src={cover} alt={title} className="w-full h-full object-cover rounded" />
                <button onClick={handlePlayPause} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full text-gray-800 text-2xl p-2 cursor-pointer transition-colors duration-300 hover:bg-opacity-90 opacity-0 group-hover:opacity-100">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
            <div className="flex-1">
                <p className="m-0 text-xl font-bold">{title}</p>
                <p className="m-0 text-base text-gray-600">{artist}</p>
            </div>
        </div>
    );
};


export default Song;