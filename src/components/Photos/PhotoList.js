import React from 'react';

import PhotoItem from './PhotoItem';
import PropTypes from "prop-types";

const PhotoList = props => (
    props.photos.map(photo => (
        <PhotoItem {...photo} fullSize={props.photoClick} />
     ))
);

PhotoList.propTypes = {
     photos: PropTypes.array
};

export default PhotoList;