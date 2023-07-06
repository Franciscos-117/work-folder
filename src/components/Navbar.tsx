import React from 'react';
import { useHistory } from "react-router-dom";
import styles from './NavbarStyles.module.scss';

const Navbar = () => {
    const history = useHistory();
    return (
        <div className={styles['navbar_cont']}>
            <div onClick={(e) => {e.preventDefault(); history.push('/about')}} className={styles['navbar_items']}>
                <p>About me</p>
            </div>
            <div className={styles['navbar_items']}>
                <p>Experience</p>
            </div>
            <div className={styles['navbar_items']}>
                <p>Works</p>
            </div>
            <div className={styles['navbar_items']}>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Navbar