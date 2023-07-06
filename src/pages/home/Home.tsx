import { useState } from 'react';
import styles from './styles/appstyle.module.scss'


function Home() {


    return (
        <div className='container'>
            <div className={styles["info"]}>
                <p className={styles['fp']}>I'm</p>
                <p className={styles['sp']}>Francisco Javier Nuñez Inurriaga</p>
                <p className={styles['tp']}>Web and App developer with 2 years of experience. Working with projects like Landing Pages, E-commerce and administrative.</p>
            </div>
        </div>
    )
}

export default Home;
