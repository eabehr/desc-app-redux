import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

const Layout = props => (
    <React.Fragment>
        <Navbar />
        <div className="container">{props.children}</div>
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.object
};

export default Layout;
