const canvasSizes = [
  {width:200, height: 300},
  {width:400, height: 300},
  {width:800, height: 450}
]


const initialState = {
  images: [],
  ids: [],
  canvasSize: null,
  canvasSizes:canvasSizes,
  canvasContext: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_IMAGE_IN_COMPOSITION':
      let ns = state.images
      let nids = state.ids
      let i = ns.find(i => i.id === action.payload.id)
      console.log(i)
      if (i){
        for(var j = 0; j < ns.length; j++){
          if (ns[j].id === action.payload.id){
            ns.splice(j, 1)
            nids.splice(j, 1)
          }
        }
        
      } else {
        nids.push(action.payload.id)
        ns.push(action.payload)
      }
      return {
        ...state,
        images: ns,
        ids: nids
      }
    case 'SET_SElECT_OPTIONS':
      let ns1 = state.images
      for (var i = 0; i < ns1.length; i++){
        if (i === action.payload){
          ns1[i].selectOptions = true
        } else {
          ns1[i].selectOptions = false
        }
      }
      return {
        ...state,
        images: ns1,
      }
    case 'REMOVE_IMAGE_FROM_OPTIONS':
      let ns2 = state.images
      let nids2 =state.ids
      ns2.splice(action.payload, 1)
      nids2.splice(action.payload, 1)
      return {
        ...state,
        ids: nids2,
        images: ns2,
      }
   
    default:
      return state
  }
}

