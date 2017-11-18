import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from '../components/Search/Search';
import * as Actions from '../actions';

const mapStateToProps = (state, props) => {
    return {
        searchType: state.searchType,
        searchQuery: state.searchQuery,
        selectedItem: state.selectedItem
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        searchTypeHandler: (newType) => {
            dispatch(Actions.searchType(newType));
        },
        searchQueryHandler: (newQuery) => {
            dispatch(Actions.searchQuery(newQuery));
        },
        setMoviesListHandler: (newQuery) => {
            dispatch(Actions.changeMovieList(newQuery));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
