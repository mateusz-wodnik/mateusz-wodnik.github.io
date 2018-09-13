import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.sass';
import { MdHome, MdCode, MdDock, MdContacts } from 'react-icons/md';

const Navigation = () => (
    <section className={styles.container}>
        <NavLink exact to='/' className={styles.link} activeClassName={styles.active}>
            <MdHome />
        </NavLink>
        <NavLink exact to='/skills' className={styles.link} activeClassName={styles.active}>
            <MdCode />
        </NavLink>
        <NavLink exact to='/cv' className={styles.link} activeClassName={styles.active}>
            <MdDock />
        </NavLink>
        <NavLink exact to='/contact' className={styles.link} activeClassName={styles.active}>
            <MdContacts />
        </NavLink>
    </section>
);

export default Navigation;
