import React, {Component} from 'react';
import api from '../../api';

class AlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          page: 1,
          albums: []
        };

        this.getAlbums = this.getAlbums.bind(this);
    }

    async componentDidMount() {
        await this.getAlbums();
    }

    async getAlbums(page = 1) {
        let response = await api.get(`albums?_page=${page}`);
        this.setState({page, albums: response.data});
    }

    render() {
        return (
            this.state.albums.map(album => (<div>{album.id}</div>))
        )
    }
}

export default AlbumPage;