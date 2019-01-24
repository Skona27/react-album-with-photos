import React from 'react';
import PropTypes from 'prop-types';

import {albumItem, albumPhoto, caption, link} from './Album.module.scss'

import {Link} from "react-router-dom";

const AlbumItem = props => (
    <div className={albumItem}>
        <Link to={`/albums/${props.id}`} className={link}>
            <figure>
                <img className={albumPhoto} alt=''
                     src='https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png' />
                <figcaption className={caption}>
                    <p><strong>Title:</strong> {props.title}</p>
                    <p><strong>Author:</strong> {props.username}</p>
                </figcaption>
            </figure>
        </Link>
    </div>
);

AlbumItem.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  username: PropTypes.string
};

export default AlbumItem;