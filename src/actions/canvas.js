export const setCanvasContext = (payload) => {
  return dispatch => {
    console.log(payload)
    dispatch({
      type: 'SET_CANVAS_CONTEXT',
      payload: payload
    })
  }
}

export const selectCanvasSize = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SELECT_CANVAS_SIZE',
      payload: payload
    })
  }
}
export const setCanvasSize = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_CANVAS_SIZE',
      payload: payload
    })
  }
}