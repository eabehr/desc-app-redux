import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataFetched: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleChange = evt => {
        const { id, value } = evt.target;
        this.setState({
            [id]: value
        });
    };

    render() {
        return (
            <div className="card-panel">
                <h5 className="center-align">Signup for Account</h5>
                <form
                    onSubmit={evt => {
                        evt.preventDefault();
                        this.props.handleSubmit({
                            name: {
                                first: this.state.firstName,
                                last: this.state.lastName
                            },
                            email: this.state.email,
                            password: this.state.password
                        });
                        this.setState({
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        });
                    }}
                >
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="small material-icons prefix">account_circle</i>
                            <input
                                type="text"
                                id="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                type="text"
                                id="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">email</i>
                            <input
                                className="validate"
                                type="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">lock</i>
                            <input
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">lock</i>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-s1">
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func
};

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = data => {
        this.props.signup(data);
    };

    render() {
        return (
            <div style={{ padding: '30px 0 0 0' }}>
                {this.props.isAuth ? (
                    <Redirect to="/" />
                ) : (
                    <div className="row">
                        <div className="col s12 l6 offset-l3">
                            <SignupForm handleSubmit={this.handleSubmit} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

SignupPage.propTypes = {
    isAuth: PropTypes.bool,
    signup: PropTypes.func
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: userData => dispatch(actions.userSignup(userData))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupPage);
