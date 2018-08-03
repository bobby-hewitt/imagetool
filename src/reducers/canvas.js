// const canvasSizes = [
//   {width:200, height: 300},
//   {width:400, height: 300},
//   {width:800, height: 450}
// ]


const initialState = {
  // canvasSize: null,
  width: 10,
  height:10,
  // canvasSizes:canvasSizes,
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
    case 'SET_CANVAS_SIZE':
    // let ns = Object.assign({},state)
    // consol
    // ns[action.payload.type] = parseInt(action.payload.value)
   
    // console.log('setting')
    console.log(state)
      return {
        ...state,
        [action.payload.type]: action.payload.value
      }
    case 'SET_CANVAS_CONTEXT':
    console.log(action.payload)
      return {
        ...state,
        canvasContext: action.payload.context,
        canvasDoc: action.payload.doc
      }
    default:
      return state
  }
}

