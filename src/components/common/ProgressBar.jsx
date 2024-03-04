import React from 'react';
import styles from './ProgressBar.module.css'; // Ensure you have the correct path

function ProgressBar({ currentTime, duration, onProgressChange }) {
    const handleChange = (e) => {
        onProgressChange(parseFloat(e.target.value));
    };

    return (
        <div className={styles.progressBarContainer}>
            <input
                className={styles.progressBar}
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleChange}
            />
            <div className={styles.timeDisplay}>
                {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)} /
                {Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}
            </div>
        </div>
    );
}

export default ProgressBar;
