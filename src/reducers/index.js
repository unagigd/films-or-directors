const initialState = {
    searchType: 'movie',
    searchQuery: '',
    moviesList: [],
    selectedItem: ''
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TYPE':
            return { ...state, searchType: action.payload };
        case 'CHANGE_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };
        case 'CHANGE_MOVIES_LIST':
            return { ...state, moviesList: action.payload };
        case 'CHANGE_SELECTED_ITEM':
            return { ...state, selectedItem: action.payload };
        default:
            return state;
    }
}

export default mainReducer;
