import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
                <h5 className="center-align">Login</h5>
                <form
                    onSubmit={evt => {
                        evt.preventDefault();
                        this.props.handleSubmit({
                            email: this.state.email,
                            password: this.state.password
                        });
                        this.setState({
                            email: '',
                            password: ''
                        });
                    }}
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">email</i>
                            <input
                                className="validate"
                                type="email"
                                id="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">lock</i>
                            <input
                                type="password"
                                id="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-s1">
                            <button className="btn">
                                {this.props.isFetching ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    isFetching: PropTypes.bool
};

class LoginPage extends React.Component {
    handleSubmit = creds => {
        this.props.login(creds);
    };

    render() {
        return (
            <div style={{ padding: '30px 0 0 0' }}>
                {this.props.isAuth ? (
                    <Redirect to="/" />
                ) : (
                    <div className="row">
                        <div className="col s12 l6 offset-l3">
                            {this.props.error && <h4 className="red-text">{this.props.error}</h4>}
                            <LoginForm
                                handleSubmit={this.handleSubmit}
                                isFetching={this.props.isFetching}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func,
    isFetching: PropTypes.bool,
    isAuth: PropTypes.bool,
    contextUser: PropTypes.object,
    token: PropTypes.string,
    error: PropTypes.string
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        isAuth: state.isAuth,
        contextUser: state.contextUser,
        token: state.token,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: creds => dispatch(actions.userLogin(creds))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
