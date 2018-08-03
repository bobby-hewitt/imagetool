import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSearchResults }from '../../actions/search'
import { setLoading }from '../../actions/ui'
import $ from 'jquery'
import './style.css'
const client_id= 'cb0e9ff714d7afdbde293391d19ba460c949be9736b86c0ba57bcd9f4576494a&per_page=30'




class Search extends Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentWillMount(){
		// console.log(this.props)
		// this.onUnsplash('cats')
	}

	onUnsplash(query){
		this.timeout = setTimeout(() => {
			let url = `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${encodeURIComponent(query)}&per_page=30`
			let images = []
			$.get(url, (data) => {

				let r = data.results
				console.log(r)
				for (var i = 0; i < r.length; i++){

					let obj = {
						ratio: r[i].height / r[i].width,
						height: r[i].height,
						width: r[i].width,
						urls: r[i].urls,
					}
					images.push(obj)
				}
				console.log(images)
				
				this.props.setLoading(false)
				this.props.setSearchResults(images)
			})
		},500)
		
	}

	onChange(){
		this.props.setLoading(true)
		clearTimeout(this.timeout)
		this.onUnsplash(this.refs.search.value)
	}

	render(){
		return(
			<div className="searchInputContainer">
			<input ref="search" className="searchInput" onChange={this.onChange.bind(this)} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
  results: state.search.results

})

const mapDispatchToProps = dispatch => bindActionCreators({
	setSearchResults,
	setLoading,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)