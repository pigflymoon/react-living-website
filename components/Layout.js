import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import '../components/Layout.scss';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Cards';
// import ConfigForm from '../components/ConfigForm/ConfigForm'
// import Modal from '../components/Category/Modal';
import Category from '../components/Category/Category';

export default class Layout extends React.Component {
   
    render() {
        return (
            <div>
                <Nav />
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
                <footer></footer>
            </div>
        );
    }
}