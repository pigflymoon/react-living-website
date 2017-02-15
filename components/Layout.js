import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import '../components/Layout.scss';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Cards';


export default () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="section-margin">
                    <Gallery />
                </div>

                <section>
                    <Cards />
                </section>

            </div>
            <footer></footer>
        </div>
    );
};