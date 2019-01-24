import React from 'react';

import {list, marginTop} from './User.module.scss';
import PropTypes from "prop-types";

const UserPosts = props => (
    <div>
        <h3 className={marginTop}>Recent Posts:</h3>
        <ul className={list}>
            {props.posts.map(post => (<li key={post.id}><em>Title: {post.title}</em></li>))}
        </ul>
    </div>
);

UserPosts.propTypes = {
    posts: PropTypes.array
};

export default UserPosts;