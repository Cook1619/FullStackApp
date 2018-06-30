import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chirps =[]
        }
    }
    componentDidMount = async () => {
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
        return <h1>Hello World!</h1>;
    }
}

export default HelloWorld;