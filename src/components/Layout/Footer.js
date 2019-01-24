import React from 'react';

import {footer} from './Layout.module.scss';

const Footer = () => (
    <footer className={footer}>
        <p>Author: Jakub Skoneczny,
            Portfolio <a href='https://jskoneczny.pl' target='_blank' rel='noopener noreferrer'>jskoneczny.pl</a>
        </p>
    </footer>
);

export default Footer;