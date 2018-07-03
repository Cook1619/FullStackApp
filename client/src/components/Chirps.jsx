import React, { Component } from 'react';
import AddChirp from './AddChirp';
import ChirpCard from './ChirpCard';


class Chirps extends Component {
    constructor(props) {
        super(props);


        this.state = {
            posts: [
                {
                    text: 'This is a new chirp'
                },
                {
                    text: 'I like to chirp way more than you'
                },
                {
                    text: 'Im the chirpiest chirp youve ever seen'
                }
            ]

        }
    }
    addChirp = (newPostBody) => {

        this.setState({ posts: this.state.posts.concat(newPostBody) });
    }
    render() {
        return (
            <div>
                <AddChirp addChirp={this.addChirp} />
                <div className="container">
                    <div className="row">
                        {
                            this.state.posts.map((post, index) => {
                                return (
                                    <ChirpCard key={index} postBody={post.text} />
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Chirps;
