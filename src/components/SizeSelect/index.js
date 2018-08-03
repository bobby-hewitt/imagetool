import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { selectCanvasSize } from '../../actions/canvas'
class SizeSelect extends Component {

	selectCanvasSize(index){
		console.log('hello')
		this.props.selectCanvasSize(index)
	}

	render(){
		return(
			<div className="canvasContainer">
				{this.props.canvasSizes.map((c, i) => {
					console.log(i, this.props.canvasSize)
					return(
						<div className={i === this.props.canvasSize ? "canvasSizeContainer isSelected" : 'canvasSizeContainer'} onClick={this.selectCanvasSize.bind(this, i)}>
							<p><strong>Width</strong>{c.width}</p>
							<p><strong>Height</strong>{c.height}</p>
						</div>
					)
				})}
			</div>
		)
	}
}


const mapStateToProps = state => ({
  images: state.composition.images,
  canvasSizes: state.canvas.canvasSizes,
  canvasSize: state.canvas.canvasSize
})

const mapDispatchToProps = dispatch => bindActionCreators({
	selectCanvasSize,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SizeSelect)