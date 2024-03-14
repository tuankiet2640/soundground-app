import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './Song.module.css';

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
        <div className={styles.song}>
            <div className={styles.cover}>
                <img src={cover} alt={`${title} cover`} />
                <button className={styles.playButton} onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.artist}>{artist}</p>
            </div>
        </div>
    );
};

export default Song;