import React from 'react';

import {item} from './Photos.module.scss';

const PhotoItem = props => (
    <figure className={item}>
        <img src={props.thumbnailUrl} />
        <figcaption>{props.title}</figcaption>
    </figure>
);

export default PhotoItem;