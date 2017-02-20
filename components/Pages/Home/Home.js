import React from 'react';

import Gallery from '../../Gallery/Gallery';
import Cards from '../../Cards/Cards';
import Category from '../../Category/Category';
import './Home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div>                
                <div className="container">
                    <div className="section-margin">
                        <Gallery />
                    </div>
                    <div>
                        <Category />
                    </div>

                    <section className="cards">
                        <Cards />
                    </section>

                </div>
            </div>
        );

    }
}