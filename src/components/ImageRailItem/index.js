import React, { Component } from 'react'
import './style.css'


export default class ImageRailItem extends Component {

	onClick(){
		if(this.props.selectOptions){

		} else {
			this.props.setSelectOptions()
		}
	}

	add(){
		this.props.add()
	}

	remove(){
		this.props.remove()
	}

	render(){
		return(
			<div className="ImageRailItemContainer" onClick={this.onClick.bind(this)}>
				<img src={this.props.image.urls.thumb} />
				{this.props.selectOptions &&
					<div className="selectOptionsContainer">
						<div className="optionContainer" onClick={this.add.bind(this)}>
						Add to composition
						</div>
						<div className="optionContainer" onClick={this.remove.bind(this)}>
						Remove from selection
						</div>
					</div>
				}
			</div>
		)
	}
}
