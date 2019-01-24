import React from 'react';

import {item} from './Photos.module.scss';
import PropTypes from "prop-types";

const PhotoItem = props => (
    <figure className={item} onClick={() => {props.fullSize(props.url)}}>
        <img src={props.thumbnailUrl} alt='' />
        <figcaption>{props.title}</figcaption>
    </figure>
);

PhotoItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};

export default PhotoItem;