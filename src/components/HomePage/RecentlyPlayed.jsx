import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Song from "../common/Song";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: true,
        infinite: true,

        appendDots: dots => (
            <div style={{ backgroundColor:"#ddd", borderRadius: "10px" }}>
              <ul style={{ margin: "1px" }}> {dots} </ul>
            </div>
        ),
    };



    return (
        <div className="w-full pb-16">
            <h2 className="heading mt-8	m-3.5 font-bold">Recently Played</h2>
            <Slider {...settings}>
                {songs.map((song) => (
                    <div key={song.id} className="p-4">
                        <Song song={song} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RecentlyPlayed;
