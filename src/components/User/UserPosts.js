import React from 'react';

import {list, marginTop} from './User.module.scss';

const UserPosts = props => (
    <div>
        <h3 className={marginTop}>Recent Posts:</h3>
        <ul className={list}>
            {props.posts.map(post => (<li><em>Title: {post.title}</em></li>))}
        </ul>
    </div>
);

export default UserPosts;