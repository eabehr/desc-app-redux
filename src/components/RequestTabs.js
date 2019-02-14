import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize';

import ItemList from './ItemList';
import * as actions from '../actions/actions';

class Tabs extends React.Component {
    componentDidMount() {
        M.Tabs.init(document.querySelectorAll('.tabs'), {});
        this.props.fetchItems();
    }

    render() {
        return (
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3">
                            <a className="active" href="#active">
                                Active
                            </a>
                        </li>
                        <li className="tab col s3">
                            <a href="#approved">Approved</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#wishlist">Wishlist</a>
                        </li>
                        <li className="tab col s3 disabled">
                            <a href="#archive">Archive</a>
                        </li>
                    </ul>
                </div>
                <div id="active" className="col s12">
                    <ItemList title="Active Requests" type="active" />
                </div>
                <div id="approved" className="col s12">
                    <ItemList title="Approved Requests" type="approved" />
                </div>
                <div id="wishlist" className="col s12">
                    <ItemList title="Wishlist Requests" type="wishlist" />
                </div>
                <div id="archive" className="col s12">
                    <ItemList title="Archive Requests" type="archive" />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: () => dispatch(actions.fetchItems())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Tabs);
