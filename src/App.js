import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';
import ListContainer from './containers/ListContainer';
import FilmDetailContainer from './containers/FilmDetailContainer';
import DirectorDetailContainer from './containers/DirectorDetailContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/film/:filmId" component={FilmDetailContainer} />
        <Route exact path="/director/:directorId" component={DirectorDetailContainer} />
        <SearchContainer />
        <ListContainer />
      </div>
      );
  }
}

export default App;
