import React, { Component } from 'react';
// import './list.css';

class List extends Component {

    constructor(props) {
        super(props);
        this.getPoster = this.getPoster.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    getPoster(item) {
        if(this.props.searchType === 'movie') {
            return item.poster_path ? `http://image.tmdb.org/t/p/w185/${item.poster_path}` : 'http://via.placeholder.com/185x278';
        } else {
            return item.profile_path ? `http://image.tmdb.org/t/p/w185/${item.profile_path}` : 'http://via.placeholder.com/185x278';
        }
    }

    selectItem(item) {
        const url = this.props.searchType === 'movie' ? `/film/${item.id}` : `/director/${item.id}`;
        this.props.selectItem(item);
        this.props.history.push(url);
    }

    render() {
        const movies = this.props.moviesList;
        return (
            <div className="row">
                {movies.map((item) => (
                    <div className="card col-xs-6 col-md-4" key={item.id}>
                        <img className="card-img-top" src={ this.getPoster(item) } alt="poster" onClick={() => { this.selectItem(item) }} />
                        <div className="card-body">
                            <h4 className="card-title">{ this.props.searchType === 'movie' ? item.title : item.name }</h4>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default List;
