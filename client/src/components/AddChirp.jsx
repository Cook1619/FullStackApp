import React, { Component } from 'react';

class AddChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPostBody: ''
        }
    }
    handlePostEditorInputChange = e => {
        this.setState({
            newPostBody: e.target.value
        });
    }

    chirp = () => {
        this.props.addChirp({ text: this.state.newPostBody });
        this.setState({
            newPostBody: '',
        });
    }
    render() {
        return (
            <div className="card post-editor">
                <div className="card-body">
                    <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
                    <button className="btn btn-success post-editor-button" onClick={this.chirp}>Add Chirp!</button>
                </div>
            </div>
        )
    }
}
export default AddChirp;