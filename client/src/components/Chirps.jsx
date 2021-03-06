import React, { Component, Fragment } from 'react';
import AddChirp from './AddChirp';
import ChirpCard from './ChirpCard';


class Chirps extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            chirps: []
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/chirps', {
                method: 'GET',
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
                   <ChirpCard 
                   text = {this.state.text}
                   />
                </Fragment>
                  
            )
       
    }
}

export default Chirps;
