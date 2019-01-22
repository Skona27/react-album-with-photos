import React from 'react';

import PhotoItem from './PhotoItem';

const PhotoList = props => (
    props.photos.map(photo => (
        <PhotoItem {...photo} />
     ))
);

export default PhotoList;