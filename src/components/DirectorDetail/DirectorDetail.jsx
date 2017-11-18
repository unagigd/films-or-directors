import React, { Component } from 'react';

class DirectorDetail extends Component {
    constructor(props) {
        super(props);
        this.getPoster = this.getPoster.bind(this);
    }

    getPoster(poster) {
        return poster ? `http://image.tmdb.org/t/p/w185/${poster}` : 'http://via.placeholder.com/185x278';
    }

    render() {
        if(!this.props.selectedItem) {
            return false;
        }
        const item = this.props.selectedItem;
        return (
            <div className="detail">
                <img src={this.getPoster(item.profile_path)} alt="poster" />
                <h1>{ item.name }</h1>
                <p>popularity: { item.popularity }</p>
            </div>
        );
    }
}

export default DirectorDetail;
