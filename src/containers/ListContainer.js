import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import List from '../components/List/List';
import * as Actions from '../actions';

const mapStateToProps = (state, props) => {
    return {
        searchType: state.searchType,
        moviesList: state.moviesList,
        selectedItem: state.selectedItem
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        selectItem: (item) => {
            dispatch(Actions.selectItem(item));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
