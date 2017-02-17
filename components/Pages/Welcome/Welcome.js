import React from 'react';


import './Welcome.scss';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <svg width="330">
                    <text className="path" x="5" y="50" stroke="white" fill="#EBA877" strokeWidth="5" fontSize="50">Welcome</text>
                    <text className="path2" x="5" y="90" stroke="white" fill="#EBA877" strokeWidth="2" fontSize="20">paint by Johan</text>
                </svg>
               
            </div>

        );

    }
}