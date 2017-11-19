import mainReducer, { initialState } from './index';

describe('Main reducer', () => {
  it('should return default state when no action was assign', () => {
    const result = mainReducer(undefined, {type: 'ACTION'});

    expect(result).toEqual(initialState);
  });

  it('should change search type', () => {
    const result = mainReducer(undefined, {type: 'CHANGE_SEARCH_TYPE', payload: 'new-type'});

    expect(result.searchType).toEqual('new-type');
  });
});