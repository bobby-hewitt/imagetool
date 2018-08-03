const canvasSizes = [
  {width:200, height: 300},
  {width:400, height: 300},
  {width:800, height: 450}
]


const initialState = {
  canvasSize: null,
  canvasSizes:canvasSizes,
  canvasContext: null,
  canvasDoc: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CANVAS_SIZE':
      return {
        ...state,
        canvasSize: action.payload
      }
    case 'SET_CANVAS_CONTEXT':
      return {
        ...state,
        canvasContext: action.payload.context,
        canvasDoc: action.payload.doc
      }
    default:
      return state
  }
}

