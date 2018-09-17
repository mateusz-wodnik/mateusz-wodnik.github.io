import React, { Component } from 'react';
import styles from './Main.sass';
import {StoreConsumer} from '../../Store';

import Home from '../Home/Home'
import Cv from '../Cv/Cv';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';


class Main extends Component {
    componentDidMount() {
        this.props.context.actions.setElementsPositionMap(["home", "projects", "cv", "contact"])
    }
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

export default React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <Main {...props} context={context} ref={ref} />}
	</StoreConsumer>
));
