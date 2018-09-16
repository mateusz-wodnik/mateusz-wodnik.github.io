import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.sass';
import App from './components/App/App';
import Store from './Store'
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Particles from 'react-particles-js';
import particles from './components/App/particles.json';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" render={(props) => (
            <Store {...props}>
                <Fragment>
                    <Particles params={particles} className={"particles"} />
                    <App />
                </Fragment>
            </Store>
        )} />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();