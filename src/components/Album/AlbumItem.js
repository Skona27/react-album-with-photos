import React from 'react';
import {Link} from "react-router-dom";

const AlbumItem = props => (
    <div>
        <p>Album title: {props.title}</p>
        <p>Author: {props.username}</p>
        <Link to={`/albums/${props.id}`}>See Album</Link>
        <hr/>
    </div>
);

export default AlbumItem;