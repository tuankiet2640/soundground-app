import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Song from "../common/Song";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const RecentlyPlayed = () => {
    // Simulating fetched player. Replace this with actual fetch logic later on.
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
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
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
