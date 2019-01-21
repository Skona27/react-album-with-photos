import React from 'react';
import AlbumItem from './AlbumItem';

 const AlbumList = props => (
     <ul>
         {props.albums.map(album => (
             <AlbumItem key={album.id} id={album.id} title={album.title} username={album.username}/>
         ))}
     </ul>
 );

export default AlbumList;