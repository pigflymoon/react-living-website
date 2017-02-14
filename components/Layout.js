import React from 'react';
import App from '../components/App';
import Gallery from '../components/Gallery';
import style from '../components/Layout.css';


export default () => {
    return (
        <div>
            <header>
                <ul className={style.navigation}>
                    <li><a>Home</a></li>
                    <li><a>Articles</a></li>
                    <li><a>Solutions</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </header>
            <div className={style.container}>
                <section className={style.main}>
                    <Gallery />
                </section>
                <aside className={style.sidebar}></aside>
            </div>
            <footer></footer>
        </div>
    );
};