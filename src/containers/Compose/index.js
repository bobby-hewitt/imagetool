import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImageRail from '../../components/ImageRail'
import Canvas from '../../components/Canvas'
import SizeSelect from '../../components/SizeSelect'
import Button from '../../components/Button'

const Compose = props => (
  <div>
  	<SizeSelect />
   	<ImageRail />
   	{props.canvasSize && 
   		<Canvas size={props.canvasSize}/>
   	}
   	<Button />
  </div>
)

const mapStateToProps = state => ({
  canvasSize: state.canvas.canvasSizes[state.canvas.canvasSize]
})

const mapDispatchToProps = dispatch => bindActionCreators({
 
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compose)