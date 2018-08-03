import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setCanvasContext } from '../../actions/canvas'
import './style.css'

class Canvas extends Component {

	componentDidMount(){
		this.props.setCanvasContext({
			context: this.refs.canvas.getContext('2d'),
			doc: this.refs.canvas
		})
	}



	render(){
		return(
			<div className="canvasContainer">
				<canvas id="canvas" className="canvas"ref="canvas" width={this.props.size.width} height={this.props.size.height}/>
			</div>
		)
	}
}


const mapStateToProps = state => ({
  images: state.composition.images
})

const mapDispatchToProps = dispatch => bindActionCreators({
	setCanvasContext,
  	//declare the change page function in mapDispatchToProps
	changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)