
const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
   
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

