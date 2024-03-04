import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause,
    faForward,
    faBackward,
    faStream,
    faHeart,
    faVolumeUp,
    faRandom,
    faRedo,
} from '@fortawesome/free-solid-svg-icons';

import ProgressBar from './ProgressBar';
import TrackInfo from './TrackInfo';

import styles from './Player.module.css';

// Default track with all the needed info
const defaultTrack = {
    title: 'Default Title',
    artist: 'Default Artist',
    audioUrl: 'default.mp3', // Placeholder, replace with your actual audio URL
    duration: 300, // 5 minutes in seconds as an example
    artwork: 'https://i1.sndcdn.com/avatars-LSx9qz6JSPb574JS-MwQJsw-t240x240.jpg', // Placeholder, replace with your actual artwork URL
};

function Player({ track = defaultTrack }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(new Audio(track.audioUrl));

    useEffect(() => {
        audioRef.current = new Audio(track.audioUrl);
        audioRef.current.load();
        const handleTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.pause();
            }
        };
    }, [track]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (newTime) => {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    return (
        <div className={styles.player}>
            <div className={styles.buttonGroup}>
                <FontAwesomeIcon icon={faBackward} className={styles.icon} />
                <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    className={styles.icon}
                    onClick={togglePlayPause}
                />
                <FontAwesomeIcon icon={faForward} className={styles.icon} />
                <FontAwesomeIcon icon={faRandom} className={styles.icon} />
                <FontAwesomeIcon icon={faRedo} className={styles.icon} />
            </div>

            <div style={{ width: '50px' }} /> {/* Spacer */}

            <ProgressBar
                currentTime={currentTime}
                duration={track.duration}
                onProgressChange={handleProgressChange}
            />

            <div style={{ width: '50px' }} /> {/* Spacer */}

            <div className={styles.volumeControl}>
                <FontAwesomeIcon icon={faVolumeUp} className={styles.icon} />
                {/* Volume slider/input */}
            </div>

            <TrackInfo title={track.title} artist={track.artist} />

            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <FontAwesomeIcon icon={faStream} className={styles.icon} />
        </div>
    );
}

export default Player;
