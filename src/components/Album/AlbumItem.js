import React from 'react';

const AlbumItem = props => {
    console.log(props);
    return (
    <div>
        <p>Album title: {props.title}</p>
        <p>Author: {props.username}</p>
        <hr/>
    </div>
)};

export default AlbumItem;