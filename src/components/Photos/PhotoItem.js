import React from 'react';

import {item} from './Photos.module.scss';


const PhotoItem = props => (
    <img className={item} src={props.thumbnailUrl} />
);

export default PhotoItem;