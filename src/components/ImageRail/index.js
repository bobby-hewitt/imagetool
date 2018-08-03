import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'
import { toggleImageInComposition, setSelectOptions, removeImageFromOptions }from '../../actions/composition'

import ImageRailItem from '../ImageRailItem'
import { fetchImages } from '../../helpers/fetchImages'

class ImageRail extends Component {

	componentDidMount(){
		console.log(this.props)
	}

	openSelectOptions(index){
		this.props.setSelectOptions(index)
		this.forceUpdate()
	}

	add(index){
		// console.log(this.props)
		console.log(this.props.canvasContext)
		if (this.props.canvasWidth > 10 && this.props.canvasHeight > 10 ){
			this.addImage.call(this, this.props.images[index])
		} else {
			alert('Must select canvas size first')
		}
	}

	addImage(image){
		var img = new Image()
		let url = 'http://localhost:8080?url=' + image.urls.full.replace('https', 'http')	 
		img.src = url
		img.crossOrigin="Anonymous" 
		img.onload = () => {
			this.props.canvasContext.drawImage(img, 0, 0, this.props.canvasWidth * image.ratio, this.props.canvasHeight );
		}
		img.onerror = (err) => {
			console.log('error', err)
		}
	}

	remove(index){
		this.props.removeImageFromOptions(index)
		this.forceUpdate()
	}

	render(){
		return(
			<div className="imageRailContainer">				
				{this.props.images.map((image, i) => {
					return(
						<ImageRailItem 
							setSelectOptions={this.openSelectOptions.bind(this, i)}
							remove={this.remove.bind(this, i)}
							add={this.add.bind(this, i)}
							selectOptions={image.selectOptions}
							image={image}
							key={i}/>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = state => ({
  images: state.composition.images,
  canvasContext: state.canvas.canvasContext,
  canvasDoc: state.canvas.canvasDoc,
  // canvasSize: state.canvas.canvasSizes[state.canvas.canvasSize]
  canvasWidth: state.canvas.width,
  canvasHeight: state.canvas.height
})

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleImageInComposition,
	setSelectOptions,
	removeImageFromOptions,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageRail)