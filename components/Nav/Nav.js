import React from 'react';

import {Link} from 'react-router';
import './Nav.scss';


export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <ul className="navigation">
                        <li><Link to="/welcome">Welcome</Link></li>
                        <li><Link to="/home">Home</Link></li>
                    </ul>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );

    }
}
