import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostsShow from './components/posts_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="post/new" component={PostNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);
