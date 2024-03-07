import Song from "../../components/common/Song";
import RecentlyPlayed from "../../components/HomePage/RecentlyPlayed";

export default function Home() {
    const kanyeSong = {
        id: 1,
        title: "BACK TO ME",
        artist: "Kanye West",
        artwork: "https://media.pitchfork.com/photos/65d4c7ed9b78b184e131aff9/1:1/w_450%2Cc_limit/Kanye-West-Vultures-1.jpg",
        url: "https://link-to-song-file.com",
    };


    return (
        <div>
            <RecentlyPlayed songs={recentlyPlayed} />


        </div>
    );
}

const recentlyPlayed = [
    {
        id: 1,
        title: "Famous",
        artist: "Kanye West",
        cover: "https://link-to-cover-image.com/famous.jpg",
        url: "https://link-to-song.com/famous",
    },
    {
        id: 2,
        title: "Stronger",
        artist: "Kanye West",
        cover: "https://link-to-cover-image.com/stronger.jpg",
        url: "https://link-to-song.com/stronger",
    },
    // Add more songs as needed
];
