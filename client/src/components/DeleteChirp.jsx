import React, { Component } from 'react';

class DeleteChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            text: ''
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/chirps', {
                method: 'DELETE',
            });
            let data = await res.json();
            console.log(data);
            this.setState({
                user: this.state.user,
                text: this.state.text,

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

export default DeleteChirp;
