import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chirps: []
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/chirps', {
                method: 'GET'
            });
            let data = await res.json();
            console.log(data);
            this.setState({ chirps: data })

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let chirpCards = this.state.chirps.map((chirp, index) => {
            return (
                <div key={index}>
                    <div className="card">
                        <div className="card-header bg-info m-4 col-3 d-flex mx-auto">{chirp.user}</div>
                        <div className="card-body bg-dark text-white">
                            <h6 className="card-title mx-auto">{chirp.text}</h6>
                        </div>
                    </div>
                </div>
            )
        })

        return
        <div className="col-lg-12">
            {chirpCards}
        </div>

    }
}

export default HelloWorld;