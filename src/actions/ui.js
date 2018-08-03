export const setLoading = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_LOADING',
      payload: payload
    })
  }
}
