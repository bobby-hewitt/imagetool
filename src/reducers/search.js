import results from '../data/mockResults'
const initialState = {
  results: results
}

export default (state = initialState, action) => {
  switch (action.type) {
   
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        results: action.payload,
      }
    default:
      return state
  }
}

