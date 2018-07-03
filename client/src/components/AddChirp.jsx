import React, { Component } from 'react';

class AddChirp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let chirps = this.props.data.map((chirp,index) => {
            return (
                <div className="card" key={index}>
                    <div className="card-body">
                        <div className="card-title">{this.props.data.name}</div>
                        <p className="card-text">{this.props.data.text}</p>
                    </div>
                </div>
            )
        });
        return (
            <div>{chirps}</div>
        )
    }
}
export default AddChirp;