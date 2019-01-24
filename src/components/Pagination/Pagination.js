import React from 'react';

import PropTypes from "prop-types";

import {button, indicator} from './Pagination.module.scss';

const Pagination = props => (
    <div>
        {props.isPrev ? <button className={button} onClick={props.prevPage}>Prev</button> : null}
        <span className={indicator}>{props.current ? props.current : null}</span>
        {props.isNext ? <button className={button} onClick={props.nextPage}>Next</button> : null}
    </div>
);

Pagination.propTypes = {
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool,
    current: PropTypes.any
};

export default Pagination;