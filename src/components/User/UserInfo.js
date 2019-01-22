import React from 'react';

import {list, marginTop} from './User.module.scss';

const UserInfo = props => (
    <div>
        <h3 className={marginTop}>Info:</h3>
        <ul className={list}>
            <li>Name: <em>{props.user.name}</em></li>
            <li>Email: <em>{props.user.email}</em></li>
            <li>Phone: <em>{props.user.phone}</em></li>
            <li>Website: <em>{props.user.website}</em></li>
        </ul>
    </div>
);

export default UserInfo;