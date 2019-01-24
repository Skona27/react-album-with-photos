import React from "react";
import PropTypes from 'prop-types';

import {backdrop} from './Backdrop.module.scss';


const Backdrop = props => (
    props.show ? <div className={backdrop} onClick={props.close}></div> : null
);

Backdrop.propTypes = {
    show: PropTypes.bool
};

export default Backdrop;