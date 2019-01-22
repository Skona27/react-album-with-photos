import React, {Component} from 'react';
import api from '../../api';

// Import view-components
import PhotoList from '../../components/Photos/PhotoList';

// HOC
import withLoader from '../../hoc/withLoader';

class PhotosPage extends Component {
    constructor(props) {
        super(props);
        const {match} = this.props;

        this.state = {
            album: {
                id: match.params.id,
                title: null
            },
            user: {
                id: null,
                name: null,
                email: null,
                phone: null,
                website: null
            },
            photos: [],
            posts: [],
            loading: false
        };
    }

    async componentDidMount() {
        // Loading data
        this.setState({...this.state, loading: true});

        // Get album data from api
        const album = await this.getAlbum(this.state.album.id);
        const {userId, id, title} = album;

        const albumState = {id, title};

        // Get user data from api
        const user = await this.getUser(userId);
        const {name, email, phone, website} = user;

        const userState = {id: userId, name, email, phone, website};

        // Get all photos from album
        const photos = await this.getAlbumPhotos(id);

        // Get user posts
        const posts = await this.getUserPosts(userId);

        this.setState({album: albumState, user: userState, photos, posts, loading: false});
    }

    getAlbum = async id => {
        // TODO - redirect or throw error if album doesn't exist
        const album = await api.get(`albums/${id}`);
        return album.data;
    };

    getUser = async id => {
        const user = await api.get(`users/${id}`);
        return user.data;
    };

    getAlbumPhotos = async albumId => {
        const photos = await api.get(`photos?albumId=${albumId}`);
        return photos.data;
    };

    getUserPosts = async userId => {
      // Limit TWO posts only
      const posts = await api.get(`posts?userId=${userId}&_limit=2`);
      return posts.data;
    };

    render() {
        return (
            <div>
               <PhotoList photos={this.state.photos} />
            </div>
        )
    }
}

export default PhotosPage;