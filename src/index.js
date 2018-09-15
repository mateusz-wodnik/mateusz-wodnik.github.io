import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.sass';
import App from './components/App/App';
import Store from './Store'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Particles from 'react-particles-js';
import particles from './components/App/particles.json';

ReactDOM.render(
    <Store>
        <BrowserRouter>
            <Fragment>
                <Particles params={particles} className={"particles"} />
                <App />
            </Fragment>
        </BrowserRouter>
    </Store>,
    document.getElementById('root')
);
registerServiceWorker();