import React from 'react';

import {albumItem, albumPhoto, caption} from './Album.module.scss'

import {Link} from "react-router-dom";

const AlbumItem = props => (
    <div className={albumItem}>
        <Link to={`/albums/${props.id}`} style={{ textDecoration: 'none' }}>
            <figure>
                <img className={albumPhoto} src='https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png' />
                <figcaption className={caption}>
                    <p><strong>Title:</strong> {props.title}</p>
                    <p><strong>Author:</strong> {props.username}</p>
                </figcaption>
            </figure>
        </Link>
    </div>
);

export default AlbumItem;