import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faStream, faHeart, faVolumeUp, faRandom, faRedo } from '@fortawesome/free-solid-svg-icons';

import ProgressBar from './ProgressBar';
import TrackInfo from './TrackInfo';

import styles from './Player.module.css';

// Default track
const defaultTrack = {
    title: 'Default Title',
    artist: 'Default Artist',
    audioUrl: 'default.mp3',
    duration: 300,
    artwork: 'https://i1.sndcdn.com/avatars-LSx9qz6JSPb574JS-MwQJsw-t240x240.jpg',
};

function Player({ track = defaultTrack }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1); // Initial volume set to max
    const [showVolumeControl, setShowVolumeControl] = useState(false);
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

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (newTime) => {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
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

            <ProgressBar
                currentTime={currentTime}
                duration={track.duration}
                onProgressChange={handleProgressChange}
            />
            <div
                className={styles.volumeControl}
                onMouseEnter={() => setShowVolumeControl(true)}
                onMouseLeave={() => setShowVolumeControl(false)}
            >
                <FontAwesomeIcon icon={faVolumeUp} className={styles.volumeIcon} />
                {showVolumeControl && (
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className={styles.volumeSlider}
                    />
                )}
            </div>
            <img src={track.artwork} alt="Album Artwork" className={styles.artwork} />
            <TrackInfo title={track.title} artist={track.artist} />
            <div style={{ width: '100px' }} /> {/* Spacer */}

            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <FontAwesomeIcon icon={faStream} className={styles.icon} />
        </div>
    );
}

export default Player;
