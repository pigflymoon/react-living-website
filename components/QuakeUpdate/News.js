import React from 'react';

export default class News extends React.Component {

    render() {
        return (
            <ul className="posts">
                {this.props.posts.map(function (post) {
                    return (
                        <li>
                            <h3>{post}</h3>
                        </li>
                    )
                })}
            </ul>


        )
    }
}
