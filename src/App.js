import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Nav from '../components/Nav/Nav';
import Home from '../components/Pages/Home/Home';
import Welcome from '../components/Pages/Welcome/Welcome';

let rootElement = document.getElementById('root');

ReactDOM.render(
    (<Router history={browserHistory}>
            <Route path="/" component={Nav}>
                <IndexRoute component={Home} />
                <Route path="/welcome" component={Welcome}/>
                <Route path="/home" component={Home}/>
            </Route>
        </Router>
    ), rootElement);

// ReactDOM.render(<Layout/>, document.getElementById('root'));


