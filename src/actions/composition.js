export const toggleImageInComposition = (payload) => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_IMAGE_IN_COMPOSITION',
      payload: payload
    })
  }
}

export const setSelectOptions = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_SElECT_OPTIONS',
      payload: payload
    })
  }
}

export const addImageToComposition = (payload) => {
  return dispatch => {
    dispatch({
      type: 'ADD_IMAGE_TO_COMPOSITION',
      payload: payload
    })
  }
}





export const removeImageFromOptions = (payload) => {
	console.log(payload)
  return dispatch => {
    dispatch({
      type: 'REMOVE_IMAGE_FROM_OPTIONS',
      payload: payload
    })
  }
}


