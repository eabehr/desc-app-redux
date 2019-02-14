import React from 'react';
import { connect } from 'react-redux';

class RequestRow extends React.Component {

    constructor(props) {
        super(props);
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
                        <a className="btn-small btn-flat">
                            <i className="material-icons left">check_box</i>
                            Approve
                        </a>
                        <a className="btn-small btn-flat">
                            <i className="material-icons left">clear</i>
                            Reject
                        </a>
                        <a className="btn-small btn-flat">
                            <i className="material-icons left">access_time</i>
                            Waitlist
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
}

export default connect()(RequestRow);

