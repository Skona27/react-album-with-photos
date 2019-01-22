import React from 'react';

import {albumList} from './Album.module.scss'

import AlbumItem from './AlbumItem';

 const AlbumList = props => (
     <ul className={albumList}>
         {props.albums.map(album => (
             <AlbumItem key={album.id} id={album.id} title={album.title} username={album.username}/>
         ))}
     </ul>
 );

export default AlbumList;