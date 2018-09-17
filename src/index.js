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
    <Fragment>
        {console.log("up")}
        <Particles params={particles} className={"particles"} />
        <BrowserRouter>
            <Route path="/" render={(props) => (
                <Store {...props}>
                    <App />
                </Store>
            )} />
        </BrowserRouter>
    </Fragment>,
    document.getElementById('root')
);
registerServiceWorker();