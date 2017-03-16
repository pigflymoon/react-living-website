import React from 'react';

import Gallery from '../../Gallery/Gallery';
import Cards from '../../Cards/Cards';
import Category from '../../Category/Category';
import NewsList from '../../NewsList/NewsList';
import QuakesList from '../../QuakesList/QuakesList';
// import QuakeUpdate from '../../QuakeUpdate/QuakeUpdate';
import './Home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div>

                <div className="bg-white">
                    <NewsList subreddit="news"/>
                    <QuakesList />
                </div>

            </div>
        );

    }
}