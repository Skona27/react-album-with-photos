import React from "react";

import {fullSize} from "./Photos.module.scss";

import Aux from "../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const PhotoFullSize = props => (
    props.show ?
        <Aux>
            <Backdrop show={props.show} close={props.close} />
            <figure className={fullSize} >
                <img src={props.url} alt='' />
            </figure>
        </Aux>
    : null
);

PhotoFullSize.propTypes = {
    show: PropTypes.bool,
    url: PropTypes.any
};


export default PhotoFullSize;