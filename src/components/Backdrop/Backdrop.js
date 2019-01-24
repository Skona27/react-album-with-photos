import React from "react";

import {backdrop} from './Backdrop.module.scss';

const Backdrop = props => (
    props.show ? <div className={backdrop} onClick={props.close}></div> : null
);

export default Backdrop;