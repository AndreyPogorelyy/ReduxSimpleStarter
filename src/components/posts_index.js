import React, { Component } from 'react';

class PostIndex extends Component {
    componentWillMount() {
        console.log('this is a good time to call action creator');
    }

    render() {
        return (
            <div>List of blogposts</div>
        );
    }

}

export default PostIndex;