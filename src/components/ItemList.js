import React from 'react';
import { connect } from 'react-redux';

const Item = props => {
    return (
        <div onClick={() => console.log('clicked...')}>
            <div className="row">
                <div className="col s1 m4">
                    {props.submittedBy.name.first} {props.submittedBy.name.last}
                </div>
                <div className="col s1 m4">
                    {props.numberOfItems} {props.name}
                </div>
                <div className="col s1 m4 right-align">{props.createdAt}</div>
            </div>
        </div>
    );
};

class ItemList extends React.Component {
    render() {
        return (
            <ul className="collection with-header">
                <li className="collection-header">
                    <h5>{this.props.title}</h5>
                </li>
                {this.props.items &&
                    this.props.items.filter(item => item.status === this.props.type).map(item => (
                        <li key={item._id} className="collection-item">
                            <Item {...item} />
                        </li>
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

export default connect(mapStateToProps)(ItemList);
