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
                <Link to="/" className="brand-logo">
                    DESC Simplify
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
