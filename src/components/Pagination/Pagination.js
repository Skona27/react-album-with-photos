import React from 'react';

import {button, indicator} from './Pagination.module.scss';

const Pagination = props => (
    <div>
        {props.isPrev ? <button className={button} onClick={props.prevPage}>Prev</button> : null}
        <span className={indicator}>{props.current ? props.current : null}</span>
        {props.isNext ? <button className={button} onClick={props.nextPage}>Next</button> : null}
    </div>
);

export default Pagination;