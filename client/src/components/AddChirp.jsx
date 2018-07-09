import React, { Component } from 'react';

class AddChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: []
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/chirps', {
                method: 'POST',
            });
            let data = await res.json();
            console.log(data);
            this.setState({
                chirps: data
            })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <Fragment>
                <h1> hello</h1>
            </Fragment>

        )

    }
}

export default AddChirp;
