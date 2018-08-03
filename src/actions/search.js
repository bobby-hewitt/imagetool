export const setSearchResults = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_SEARCH_RESULTS',
      payload: payload
    })
  }
}
