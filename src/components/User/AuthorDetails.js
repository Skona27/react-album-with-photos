import React from 'react';

import {authorDetails, authorHeading} from './User.module.scss';

import UserInfo from '../../components/User/UserInfo';
import UserPosts from '../../components/User/UserPosts';
import PropTypes from "prop-types";


const AuthorDetails = props => (
    <div className={authorDetails}>
        <h2 className={authorHeading}>Author Details</h2>
        <UserInfo user={props.info}/>
        <UserPosts posts={props.posts}/>
    </div>
);

AuthorDetails.propTypes = {
    info: PropTypes.any,
    posts: PropTypes.array
};

export default AuthorDetails;