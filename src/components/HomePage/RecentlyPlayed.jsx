import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Song from "../common/Song";


const RecentlyPlayed = () => {
    // Simulating fetched songs. Replace this with actual fetch logic if needed.
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchedSongs = [
            { id: 1, title: "Famous", artist: "Kanye West", cover: "https://upload.wikimedia.org/wikipedia/commons/1/19/Famouscover1.jpg", url: "link-to-song-1" },
            { id: 2, title: "Stronger", artist: "Kanye West", cover: "https://upload.wikimedia.org/wikipedia/en/d/d7/KW-Stronger.jpg", url: "link-to-song-2" },
        ];
        setSongs(fetchedSongs);
    }, []);

    if(!songs.length) {
        return <p>Unable to fetch songs</p>
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    return (
        <div className="w-full pb-16 flex">
            <h2 className="heading">Recently Played</h2>
                {songs.map((song) => (
                    <div key={song.id} className="p-4">
                        <Song song={song} />
                    </div>
                ))}
        </div>
    );
};

export default RecentlyPlayed;
