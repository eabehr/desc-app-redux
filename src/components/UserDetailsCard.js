import React from 'react';
import PropTypes from 'prop-types';

const UserDetailCard = ({ contextUser, token }) => {
    return (
        <div className="card-panel grey lighten-5">
            <h4 className="center-align">{`${contextUser.name.first} ${contextUser.name.last}`}</h4>
            <h6>
                <strong>Id:</strong> {contextUser._id}
            </h6>
            <h6>
                <strong>Email:</strong> {contextUser.email}
            </h6>
            <h6>
                <strong>Password:</strong> {contextUser.password}
            </h6>
            <h6>
                <strong>Roles:</strong>{' '}
                {contextUser.roles.map(role => (
                    <span key={role}>{role + ' '}</span>
                ))}
            </h6>
            <h6>
                <strong>isEmailValid:</strong> {contextUser.isEmailValid ? 'true' : 'false'}
            </h6>
            <h6>
                <strong>lastLoginAt:</strong> {contextUser.lastLoginAt}
            </h6>
            <h6 style={{ overflowWrap: 'break-word' }}>
                <strong>JSON Web Token:</strong> {token}
            </h6>
        </div>
    );
};

UserDetailCard.propTypes = {
    contextUser: PropTypes.object,
    token: PropTypes.string
};

export default UserDetailCard;
