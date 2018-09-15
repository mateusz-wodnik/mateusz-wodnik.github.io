import React, { Component } from 'react';
import styles from './Main.sass';

import Home from '../Home/Home'
import Cv from '../Cv/Cv';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

class Main extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Home />
                <Projects />
                <Cv />
                <Contact />
            </div>
        );
    }
}

export default Main;