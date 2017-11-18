export const changeMovieList = (newQuery) => ({
    type: 'CHANGE_MOVIES_LIST',
    payload: newQuery
});

export const searchType = (newType) => ({
    type: 'CHANGE_SEARCH_TYPE',
    payload: newType
});

export const searchQuery = (newQuery) => ({
    type: 'CHANGE_SEARCH_QUERY',
    payload: newQuery
});

export const selectItem = (newItem) => ({
    type: 'CHANGE_SELECTED_ITEM',
    payload: newItem
});