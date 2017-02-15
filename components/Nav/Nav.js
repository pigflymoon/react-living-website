import React from 'react';
import './Nav.scss';

export default class Nav extends React.Component {
    render() {
        return (
            <header>
                <ul className="navigation">
                    <li><a>Home</a></li>
                    <li><a>Articles</a></li>
                    <li><a>Solutions</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </header>
        );

    }
}
