import React from 'react';
import { connect } from 'react-redux';
import RequestRow from './RequestRow';

class RequestedItemsList extends React.Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible.expandable');
            var instances = M.Collapsible.init(elems, { accordion: false });
          });
    }

    render() {
        return (
            <ul className="collapsible expandable">

                {this.props.items &&
                    this.props.items.filter(item => item.status === this.props.type).map(item => (
                            <RequestRow key={item._id} {...item} />
                    ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps)(RequestedItemsList);
