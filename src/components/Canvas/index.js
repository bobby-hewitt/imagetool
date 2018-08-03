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

	componentWillReceiveProps(np){
		this.forceUpdate()
		console.log(this.props)
		if (np.width !== this.props.width || np.height !== this.props.height){
			this.props.setCanvasContext({
			context: this.refs.canvas.getContext('2d'),
			doc: this.refs.canvas
		})
		}
	}



	render(){
		console.log(this.props.width, this.props.height)
		return(
			<div className="canvasContainer">
				
				<canvas id="canvas" className="canvas" ref="canvas" width={this.props.width} height={this.props.height}/>
				
			</div>
		)
	}
}


const mapStateToProps = state => ({
	width: state.canvas.width,
	height:state.canvas.height,
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