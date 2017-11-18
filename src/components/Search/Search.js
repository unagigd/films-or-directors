import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.switchSearchType = this.switchSearchType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.fetchTheMovieDB = this.fetchTheMovieDB.bind(this);
    }

    switchSearchType(newType) {
        this.props.searchTypeHandler(newType);
        this.props.setMoviesListHandler([]);
        this.props.history.push('/');
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleSearch(event) {
        event.preventDefault();
        const newQuery = this.inputField.value;
        this.props.searchQueryHandler(newQuery);
        this.fetchTheMovieDB(newQuery);
        this.props.history.push('/');
    }

    fetchTheMovieDB(query) {
        const apiKey = '35fd1ecce0a6a79fc091f76ed2ca80e9';
        const type = this.props.searchType;
        const theMovieDatabaseUrl = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&language=en-US&query=${query}`;
        fetch(theMovieDatabaseUrl).then(
            data => data.json()
        ).then(data => {
            const results = data.results.length > 0 ? data.results : [];
            this.props.setMoviesListHandler(results);
        }).catch(err => {
            console.log(err.message);
        });
    }

    render() {
        return (
            <div className="row search">
                <div className="search__container clearfix">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-xs-12">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="searchQuery"
                                    className="form-control search__text-input"
                                    placeholder="Type here..."
                                    autoFocus="true"
                                    autoComplete="off"
                                    ref={(input) => { this.inputField = input; }}
                                />
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <button className={`btn ${this.props.searchType === 'movie' ? 'search__type-button btn-primary' : 'search__type-button'}`} onClick={() => { this.switchSearchType('movie') }}>Film</button>
                            <button className={`btn ${this.props.searchType === 'person' ? 'search__type-button btn-primary' : 'search__type-button'}`} onClick={() => { this.switchSearchType('person') }}>Director</button>
                            <button type="submit" className="btn search_button" value="Search" onClick={this.handleSearch}>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;
