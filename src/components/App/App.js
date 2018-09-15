import React, { Component, Fragment } from 'react';
import styles from './App.sass';
import { hot } from "react-hot-loader";
import {StoreConsumer} from '../../Store';
import { Route, Switch } from 'react-router-dom';

import Particles from 'react-particles-js';
import particles from './particles.json';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        {/* <Particles params={particles} className={styles.particles} /> */}
        <Sidebar />
        <Route exact path={"/"} component={Main} />
      </div>
    );
  }
}

export default hot(module)(React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <App {...props} context={context} ref={ref} />}
	</StoreConsumer>
)));
