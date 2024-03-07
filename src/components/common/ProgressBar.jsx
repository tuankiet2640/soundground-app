import React from 'react';
import styles from './ProgressBar.module.css';

function ProgressBar({ currentTime, duration, onProgressChange }) {
    const handleChange = (e) => {
        onProgressChange(parseFloat(e.target.value));
    };

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.currentTimeDisplay}>
                {('0' + Math.floor(currentTime % 60)).slice(-2)}:{('0' + Math.floor((currentTime % 3600) / 60)).slice(-2)}
            </div>
            <input
                className={styles.progressBar}
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleChange}
            />
            <div className={styles.totalTimeDisplay}>
                {'0' +Math.floor(duration / 3600)}:{('0' + Math.floor((duration % 3600) / 60)).slice(-2)}:{('0' + Math.floor(duration % 60)).slice(-2)}
            </div>
        </div>
    );
}

export default ProgressBar;