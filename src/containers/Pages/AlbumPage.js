import React, {Component} from 'react';
import api from '../../api';

// Styles
import {titleBar, heading1} from './Page.module.scss';

// Import view-components
import AlbumList from '../../components/Album/AlbumList';
import Pagination from '../../components/Pagination/Pagination';

// HOC
import withLoader from '../../hoc/withLoader';
const AlbumWithLoader = withLoader(AlbumList);


class AlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          perPage: 10,
          page: null,
          prevPage: false,
          nextPage: false,
          albums: [],
          loading: false,
        };
    }

    async componentDidMount() {
        await this.getAlbums();
    }

    getAlbums = async (page = 1) => {
        // Loading data
        this.setState({...this.state, loading: true});

        const albums = await api.get(`albums?_page=${page}&_limit=${this.state.perPage}`);

        // Assign user info to album
        for (let album of albums.data) {
            const username = await this.getUsername(album.userId);
            album.username = username;
        }

        // Pagination info from response header
        this.pagination(albums.headers.link);

        // Data loaded
        this.setState({...this.state, page, albums: albums.data, loading: false});
    };

    // TODO - add caching
    getUsername = async userId => {
        const user = await api.get(`users/${userId}`);
        return user.data.username;
    };

    pagination = headers => {
        // Splitting links from header
        const links = headers.split(',');

        // State representation of pages availability
        const pages = {nextPage: false, prevPage: false};

        links.forEach(link => {
            const temp = link.split(';');

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

    loadNextPage = async () => {
        await this.getAlbums(this.state.page + 1);
    };

    loadPrevPage = async () => {
       await this.getAlbums(this.state.page - 1);
    };


    render() {
        const {nextPage, prevPage, page, albums, loading} = this.state;

        return (
            <main>
                <div className={titleBar}>
                    <h1 className={heading1}>See all albums</h1>
                    <Pagination isNext={nextPage} isPrev={prevPage} current={page}
                                nextPage={this.loadNextPage} prevPage={this.loadPrevPage} />
                </div>

                <AlbumWithLoader loading={loading} albums={albums} />
            </main>
        )
    }
}

export default AlbumPage;