import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/Pages/Home/Home'
import Welcome from './components/Pages/Welcome/Welcome'
import Quake from './components/Pages/Quake/Quake'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}></Route>
            <Route path="/welcome" component={Welcome}></Route>
            <Route path="/quake" component={Quake}></Route>
        </Route>
    </Router>
),document.getElementById('app'))
