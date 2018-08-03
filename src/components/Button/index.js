import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

class Button extends Component {

	onClick(){
		// var data = this.props.canvasDoc.toDataURL();
		// var prev = window.location.href;
		// window.location.href = data.replace("image/png", "image/octet-stream");
		// window.location.href = prev;
		if (this.props.canvasDoc){
			var download = document.getElementById("download");
			var image = document.getElementById("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
			  download.setAttribute("href", image);

		}
	}


	render(){
		return(
			<a id="download" download="canvas.png">
			<div className="buttonContainer" onClick={this.onClick.bind(this)}>
				Download image
			</div>
			</a>
		)
	}
}


const mapStateToProps = state => ({
  canvasContext: state.canvas.canvasContext,
  canvasDoc: state.canvas.canvasDoc
})

const mapDispatchToProps = dispatch => bindActionCreators({
 
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)