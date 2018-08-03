import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { selectCanvasSize, setCanvasSize } from '../../actions/canvas'
class SizeSelect extends Component {

	selectCanvasSize(index){
		console.log('hello')
		this.props.selectCanvasSize(index)
	}

	onChange(type){
		this.props.setCanvasSize({
			type: type,
			value: this.refs[type].value
		})
		this.forceUpdate()
	}

	render(){
		return(
			<div className="canvasContainer">
				<label htmlFor="width">Width</label>
				<input ref="width" type="number" name="width" onChange={this.onChange.bind(this,'width')} />
				<label htmlFor="height">Height</label>
				<input ref="height" type="number" name="height" onChange={this.onChange.bind(this,'height')} />
				{/*this.props.canvasSizes.map((c, i) => {
					
					return(
						<div key={i} className={i === this.props.canvasSize ? "canvasSizeContainer isSelected" : 'canvasSizeContainer'} onClick={this.selectCanvasSize.bind(this, i)}>
							<p><strong>Width</strong>{c.width}</p>
							<p><strong>Height</strong>{c.height}</p>
						</div>
					)
				})*/}
			</div>
		)
	}
}


const mapStateToProps = state => ({
  images: state.composition.images,
  width: state.canvas.width,
  height:state.canvas.height
})

const mapDispatchToProps = dispatch => bindActionCreators({
	selectCanvasSize,
	setCanvasSize,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SizeSelect)