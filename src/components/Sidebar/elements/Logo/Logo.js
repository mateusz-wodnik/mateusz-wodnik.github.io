import React from 'react';
import styles from './Logo.sass'

const Logo = () => (
    <div className={styles.container}>
        <img src={"/logo-opt.svg"} alt="logo" className={styles.image} />
    </div>
);

export default Logo;
