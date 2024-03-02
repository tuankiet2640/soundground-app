import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaSearch, FaUpload, FaUser, FaBell } from 'react-icons/fa';
import styles from '../../styles/components/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftSection}>
                <FaCloud className={styles.cloudIcon} />
                <span className={styles.brandName}>Âm Thanh Mây</span>
            </div>
            <div className={styles.centerSection}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link to="/home">Home</Link></li>
                    <li className={styles.navItem}><Link to="/feed">Feed</Link></li>
                    <li className={styles.navItem}><Link to="/library">Library</Link></li>
                </ul>
                <div className={styles.searchContainer}>
                    <FaSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Search" className={styles.searchInput} />
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.actionButton}>
                    <button className={styles.tryPro}>Try Next Pro</button>
                </div>
                <div className={styles.forArtistsContainer}>
                    <Link to="/artists" className={styles.forArtists}>For Artists</Link>
                </div>
                <div className={styles.iconContainer}>
                    <FaUpload className={styles.uploadIcon} />
                </div>
                <div className={styles.iconContainer}>
                    <FaUser className={styles.userIcon} />
                </div>
                <div className={styles.iconContainer}>
                    <FaBell className={styles.bellIcon} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
