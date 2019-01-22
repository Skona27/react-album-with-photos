import React from 'react';

import Spinner from '../components/Spinner/Spinner';

const WithLoader = Component => {
    return  ({ loading, ...props }) => {
        if (!loading) {
            return (<Component {...props} />);
        } else {
            return <Spinner/>;
        }
    };
}

export default WithLoader;