import React, {Component, Fragment} from 'react';

// Import styles
import styles from './Sidebar.sass';
import stylesSocial from './elements/Social/Social.sass';

// Import components
import Navigation from './elements/Navigation/Navigation';
import Social from '../shared/Social';
import Logo from './elements/Logo/Logo';

class Sidebar extends Component {
    state = {
        isOpened: false
    }
    handleOpen = () => {
        this.setState(state => ({isOpened: !state.isOpened}))
    }
    render() {
        return(
            <aside className={`${styles.container} ${this.state.isOpened ? styles.active : ""}`}>
                <button className={styles.button} onClick={this.handleOpen}>
                    <div className={styles.b1}></div>
                    <div className={styles.b2}></div>
                    <div className={styles.b3}></div>
                </button>
                <Logo/>
                <Navigation/>
                <Social styles={stylesSocial}/>
            </aside>
        );
    }
}


export default Sidebar;
