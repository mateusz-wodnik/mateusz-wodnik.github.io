import React, { Component } from 'react';
import styles from './App.sass';
import { hot } from "react-hot-loader";
import {StoreConsumer} from '../../Store';
import { Route, Switch } from 'react-router-dom';

import Particles from 'react-particles-js';
import particles from './particles.json';

import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home'
import Cv from '../Cv/Cv';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Particles params={particles} className={styles.particles} />
        <Sidebar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/projekty"} component={Projects} />
          <Route path={"/podsumowanie"} component={Cv} />
          <Route path={"/kontakt"} component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <App {...props} context={context} ref={ref} />}
	</StoreConsumer>
)));
