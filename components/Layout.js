import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import '../components/Layout.scss';
import Nav from '../components/Nav/Nav';

export default () => {
    return (
        <div>
            <Nav />
            <div className="container">
               
                    <Gallery />


            </div>
            <footer></footer>
        </div>
    );
};