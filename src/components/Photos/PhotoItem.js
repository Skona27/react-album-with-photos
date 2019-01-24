import React from 'react';

import {item} from './Photos.module.scss';

const PhotoItem = props => (
    <figure className={item} onClick={() => {props.fullSize(props.url)}}>
        <img src={props.thumbnailUrl} alt='' />
        <figcaption>{props.title}</figcaption>
    </figure>
);

export default PhotoItem;