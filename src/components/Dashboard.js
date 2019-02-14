import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="grey-text align-center">Dashboard component</h2>
                {this.props.isAuth ? (
                    <div className="row">
                        <div className="col s1 m4">
                            <Link
                                to="/create-request"
                                className="waves-effect waves-light btn-large"
                            >
                                Create Request
                            </Link>
                        </div>
                        <div className="col s1 m4">
                            <Link to="/requests" className="waves-effect waves-light btn-large">
                                View Requests
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p>Please sign in...</p>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

export default connect(mapStateToProps)(Dashboard);
