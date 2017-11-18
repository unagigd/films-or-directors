import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DirectorDetail from '../components/DirectorDetail/DirectorDetail';
import * as Actions from '../actions';

const mapStateToProps = (state, props) => {
    return {
        searchType: state.searchType,
        selectedItem: state.selectedItem
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        clearSelectedItem: () => {
            dispatch(Actions.selectItem(null));
            debugger;
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectorDetail));