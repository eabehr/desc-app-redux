import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

const Navbar = props => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <span className="desc-logo">
                    <img src="https://www.desc.org/wp-content/themes/desc/img/logo-desc.png"
                        height="60"
                        width="60" />
                </span>
                <Link to="/" className="brand-logo">
                    DESC In Kind Portal
                </Link>
                {props.isAuth ? (
                    <SignedInLinks contextUser={props.contextUser} />
                ) : (
                        <SignedOutLinks />
                    )}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    isAuth: PropTypes.bool,
    contextUser: PropTypes.object
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
        contextUser: state.contextUser
    };
};

export default connect(mapStateToProps)(Navbar);
