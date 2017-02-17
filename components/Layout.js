import React from 'react';

import '../components/Layout.scss';
import Nav from '../components/Nav/Nav';
import Home from '../components/Pages/Home/Home';


export default class Layout extends React.Component {
   
    render() {
        return (
            <div>
                <Nav />
                <div className="content">
                    <Home />
                </div>
               
                <footer></footer>
            </div>
        );
    }
}