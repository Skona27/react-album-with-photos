import React from 'react';

import {photoList} from './Photos.module.scss';

import PhotoItem from './PhotoItem';

const PhotoList = props => (
    <div className={photoList}>
        {props.photos.map(photo => (
            <PhotoItem {...photo} />
         ))}
    </div>
);

export default PhotoList;