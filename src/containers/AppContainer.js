import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import App from '../App';

const mapStateToProps = (state, props) => {
    return {
        searchType: state.searchType,
        searchQuery: state.searchQuery,
        moviesList: state.moviesList,
        selectedItem: state.selectedItem
    };
};

export default withRouter(connect(mapStateToProps)(App));
