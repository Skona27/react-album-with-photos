import React from 'react';

const Pagination = props => (
    <div>
        {props.isPrev ? <button onClick={props.prevPage}>Prev</button> : null}
        <span>{props.current ? props.current : null}</span>
        {props.isNext ? <button onClick={props.nextPage}>Next</button> : null}
    </div>
);

export default Pagination;