import React from 'react';

import PhotoItem from './PhotoItem';
import PropTypes from "prop-types";

const PhotoList = props => (
    props.photos.map(photo => (
        <PhotoItem key={photo.id} {...photo} fullSize={props.photoClick} />
     ))
);

PhotoList.propTypes = {
     photos: PropTypes.array
};

export default PhotoList;