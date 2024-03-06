import React from 'react';
import styles from './Song.module.css';

const Song = ({ title, artist, artwork, duration, progress }) => {
    return (
        <div className={styles.song}>
            <div className={styles.artwork}>
                <img src={artwork} alt="Album Artwork" />
            </div>
            <div className={styles.songInfo}>
                <div className={styles.title}>{title}</div>
                <div className={styles.artist}>{artist}</div>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={styles.duration}>{formatDuration(duration)}</div>
            </div>
        </div>
    );
};

const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default Song;
