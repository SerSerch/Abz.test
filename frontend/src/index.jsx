/********************************************************************
 * Includes															*
 *********************************************************************/
//Migration to typography v2
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: [
            'Overpass:600',
            'Source Sans Pro:400,700',
            'sans-serif'
        ]
    }
});

/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navtop from 'components/Navtop';
import Footer from 'components/Footer';

import routes from './routes';
import { store } from './store';

/********************************************************************
 * Main															*
 *********************************************************************/

class App extends Component{
    render(){
        return(
            <Fragment>
                <div className="container">
                    <Navtop />
                    <main className="main">
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                        </Switch>
                    </main>
                </div>
                <Footer className="footer" />
            </Fragment>
        );
    }
}

ReactDom.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('web-page'));
