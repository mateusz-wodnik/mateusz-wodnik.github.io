import React from 'react';
import styles from './School.sass';
import { FaArrowRight } from "react-icons/fa"

const School = ({school}) => (
    <li className={styles.container}>
        <img src={require(`../../icons/${school.img}`)} className={styles.icon} />
        <div className={styles.content}>
            <p className={styles.date}>{school.startDate} <span className={styles.arrow}><FaArrowRight /></span> {school.endDate ? school.endDate : '...'}</p>
            <div className={styles.info}>
                <p className={styles.name}>{school.institution}</p>
                <p className={styles.area}>{school.area}</p>
                <p className={styles.type}>{school.studyType}</p>
            </div>
        </div>
    </li>
);

export default School;