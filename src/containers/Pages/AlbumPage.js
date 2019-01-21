import React, {Component} from 'react';
import api from '../../api';

// Import view-components
import AlbumList from '../../components/Album/AlbumList';

class AlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          page: 1,
          albums: []
        };

        this.getAlbums = this.getAlbums.bind(this);
        this.getUsername = this.getUsername.bind(this);
    }

    async componentDidMount() {
        await this.getAlbums();
    }

    async getAlbums(page = 1) {
        let albums = await api.get(`albums?_page=${page}`);

        for (let album of albums.data) {
            let username = await this.getUsername(album.userId);
            album.username = username;
        };

        this.setState({page, albums: albums.data});
    }

    // TODO add caching
    async getUsername(userId) {
        let user = await api.get(`users/${userId}`);
        return user.data.username;
    }

    render() {
        return (
            <AlbumList albums={this.state.albums} />
        )
    }
}

export default AlbumPage;