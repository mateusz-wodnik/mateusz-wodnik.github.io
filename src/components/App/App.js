import React, { Component } from 'react';
import styles from './App.sass';
import { hot } from "react-hot-loader";
import {StoreConsumer} from '../../Store';
import { Route } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
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
