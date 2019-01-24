import React from "react";

import {fullSize} from "./Photos.module.scss";

import Aux from "../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

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


export default PhotoFullSize;