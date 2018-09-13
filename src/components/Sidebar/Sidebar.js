import React from 'react';

// Import styles
import styles from './Sidebar.sass';
import stylesSocial from './elements/Social/Social.sass';

// Import components
import Navigation from './elements/Navigation/Navigation';
import Social from '../shared/Social';
import Logo from './elements/Logo/Logo';

const Sidebar = () => (
    <aside className={styles.container}>
        <Logo/>
        <Navigation/>
        <Social styles={stylesSocial}/>
    </aside>
);

export default Sidebar;
