import React, {Component} from 'react';
import api from '../../api';

// Import view-components
import AlbumList from '../../components/Album/AlbumList';
import Pagination from '../../components/Pagination/Pagination';

class AlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          perPage: 10,
          page: null,
          prevPage: false,
          nextPage: false,
          albums: []
        };
    }

    async componentDidMount() {
        await this.getAlbums();
    }

    getAlbums = async (page = 1) => {
        let albums = await api.get(`albums?_page=${page}&_limit=${this.state.perPage}`);

        for (let album of albums.data) {
            let username = await this.getUsername(album.userId);
            album.username = username;
        }

        // Pagination info from response header
        this.pagination(albums.headers.link);

        this.setState({...this.state, page, albums: albums.data});
    };

    // TODO add caching
    getUsername = async userId => {
        let user = await api.get(`users/${userId}`);
        return user.data.username;
    };

    pagination = headers => {
        let links = headers.split(',');

        // Representation of pages availability
        let pages = {nextPage: false, prevPage: false};

        links.forEach(link => {
            let temp = link.split(';');

            // Switching on link.rel
            switch(temp[1].replace(/\s/g, "")) {
                case 'rel="next"':
                    pages.nextPage = true;
                    break;
                case 'rel="prev"':
                    pages.prevPage = true;
                    break;
                default:
                    break;
            }

            this.setState({...this.state, ...pages});
        });
    };

    nextPage = async () => {
        await this.getAlbums(this.state.page + 1);
    };

    prevPage = async () => {
       await this.getAlbums(this.state.page - 1);
    };


    render() {
        return (
            <div>
                <AlbumList albums={this.state.albums} />
                <Pagination isNext={this.state.nextPage} isPrev={this.state.prevPage} current={this.state.page}
                nextPage={this.nextPage} prevPage={this.prevPage} />
            </div>
        )
    }
}

export default AlbumPage;