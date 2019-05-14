import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class RequestNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentNote: ""};

        this.handleCurrentNoteChange = this.handleCurrentNoteChange.bind(this);
        this.handleSubmitNote = this.handleSubmitNote.bind(this);
    }

    getNotes = () => {
        const notes = this.props.item.notes.map((note, i) =>
            <li key={i}>
            <b>{note.submittedBy.name.first} {note.submittedBy.name.last}:   </b>
            {note.body}
            </li>
        );
  
        return notes;
    }

    handleCurrentNoteChange(event) {
        this.setState({currentNote: event.target.value});
    }

    handleSubmitNote(event) {
        console.log(this.state.currentNote);
        var id = this.props.item._id;

        var noteData = {
            itemId : id,
            requestBody : {
                // TODO get current user id
                "submittedBy" : this.props.contextUser || "5bc50dabf5aa6ae120b49005",
                "body" : this.state.currentNote
            }
        }
        this.props.postNoteToItem(noteData);
        this.setState({currentNote: ""});
        location.reload();

    }

    render() {
        return (
            <div>
                <h6>Notes</h6>
                <ul>
                    {this.getNotes()}
                </ul>
                <input placeholder="Add a note" id="" type="text" value={this.state.currentNote} onChange={this.handleCurrentNoteChange}/>
                {/* <input type="submit" value="Submit note" /> */}
                <button className="btn waves-effect waves-light" type="submit" onClick={this.handleSubmitNote}>Post Note</button>
            </div>

        );
    }
}

RequestNotes.propTypes = {
    postNoteToItem: PropTypes.func,
    contextUser: PropTypes.object
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
        contextUser: state.contextUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postNoteToItem: noteData => dispatch(actions.postNoteToItem(noteData))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestNotes);