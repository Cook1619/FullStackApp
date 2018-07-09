import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Chirps from './Chirps.jsx';
import EditChirp from './EditChirp';
import ChirpCard from './ChirpCard';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Chirps} />
                        <Route path="/chirp/:id/edit" component={EditChirp} />
                        <Route path="/chirp/:id"  component={ChirpCard}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;