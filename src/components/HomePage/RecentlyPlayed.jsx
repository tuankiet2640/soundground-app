import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Song from "./Song"; // for tonight work
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const RecentlyPlayed = () => {
    // Simulating fetched songs. Replace this with actual fetch logic if needed.
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchedSongs = [
            { id: 1, title: "Famous", artist: "Kanye West", cover: "link-to-cover-1", url: "link-to-song-1" },
            { id: 2, title: "Stronger", artist: "Kanye West", cover: "link-to-cover-2", url: "link-to-song-2" },
            // Add more songs as needed
        ];
        setSongs(fetchedSongs);
    }, []);

    if(!songs.length) {
        return <p>Unable to fetch songs</p>
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div className="w-full pb-16">
            <h2 className="heading">Recently Played</h2>
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
