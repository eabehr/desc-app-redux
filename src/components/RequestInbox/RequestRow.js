import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class RequestRow extends React.Component {

    constructor(props) {
        super(props);
        this.updateItemStatus = this.updateItemStatus.bind(this);
    }

    render() {
        return (
            <li>
                <div className="collapsible-header">
                    <div className="col s1 m4">
                        {this.props.submittedBy.name.first} {this.props.submittedBy.name.last}
                    </div>
                    <div className="col s1 m4">
                        {this.props.name} - {this.props.numberOfItems}
                    </div>
                    <div className="col s1 m4 right-align">{this.getDate(this.props.createdAt)}</div>
                </div>
                <div className="collapsible-body">
                    <div className="actions">
                        <a className="btn-small btn-flat" onClick={() => this.updateItemStatus("approved")}>
                            <i className="material-icons left">check_box</i>
                            Approve
                        </a>
                        <a className="btn-small btn-flat" onClick={() => this.updateItemStatus("denied")}>
                            <i className="material-icons left">clear</i>
                            Reject
                        </a>
                        <a className="btn-small btn-flat" onClick={() => this.updateItemStatus("wishlist")}>
                            <i className="material-icons left">access_time</i>
                            Wishlist
                        </a>
                    </div>

                    <input placeholder="Add a note" id="" type="text"/>
                </div>
            </li>
        
        );
    }

    getDate(createdAt) {
        var date = new Date(createdAt)
        return date.toDateString();
    }

    updateItemStatus(status) {
        var id = this.props._id;
        var url = 'http://localhost:3000/api/items/' + id;

        let itemData = {
            itemId : id,
            requestBody : {
                "status" : status
            }
        }
        this.props.updateItemStatus(itemData);
    }
}

RequestRow.propTypes = {
    updateItemStatus: PropTypes.func
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateItemStatus: itemStatusData => dispatch(actions.updateItemStatus(itemStatusData))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestRow);
