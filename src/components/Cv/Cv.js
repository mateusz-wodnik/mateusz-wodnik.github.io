import React from 'react';
import styles from './Cv.sass';
import data from './cv.data';
import Technologies from './elements/Technologies/Technologies';
import Education from './elements/Education/Education';

const Cv = () => (
    <article id="cv" className={styles.wrapper}>
        <h2 className={styles.name}>Umiejętności</h2>
        <div className={styles.container}>
            <Technologies technologies={data.skills} />
            <Education education={data.education} />
        </div>
    </article>
);

export default Cv;