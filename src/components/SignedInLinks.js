import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize';

import * as actions from '../actions/actions';

class SignedInLinks extends React.Component {
    componentDidMount() {
        M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { coverTrigger: false });
    }
    render() {
        return (
            <ul className="right hide-on-med-and-down">
                <li>
                    <a className="dropdown-trigger" href="#" data-target="accountDropdown">
                        <i className="material-icons left" style={{ paddingTop: 5 }}>
                            account_circle
                        </i>
                        {`${this.props.contextUser.name.first} ${this.props.contextUser.name.last}`}
                    </a>
                    <ul id="accountDropdown" className="dropdown-content">
                        <li>
                            <a href="#!">Profile</a>
                        </li>
                        <li>
                            <a href="#!" onClick={this.props.logout}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

SignedInLinks.propTypes = {
    contextUser: PropTypes.object,
    logout: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.userLogout())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignedInLinks);
