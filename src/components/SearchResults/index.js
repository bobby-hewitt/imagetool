import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSearchResults }from '../../actions/search'
import { setLoading }from '../../actions/ui'
import { toggleImageInComposition }from '../../actions/composition'

import SearchResult from '../SearchResult'
import $ from 'jquery'
import './style.css'
const client_id= 'cb0e9ff714d7afdbde293391d19ba460c949be9736b86c0ba57bcd9f4576494a&per_page=30'




class SearchResults extends Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentWillMount(){
		// console.log(this.props)
		// this.onUnsplash('cats')
		// this.updateColumns()
	}

	// componentWillReceiveProps(np){
	// 	if (this.props.results[0].urls.thumb !== np.results[0].urls.thumb){
	// 		this.updateColumns()
	// 	}
	// }

	// updateColumns(){
	// 	let r = this.props.results;
	// 	let columns = [
	// 		{cumulative: 0, results: []},
	// 		{cumulative: 0, results: []},
	// 		{cumulative: 0, results: []},
	// 	]
	// 	for (var i = 0; i < r.length; i++){
	// 		console.log(r[i])
	// 	}
	// }

	onImageClick(index){
		let r = this.props.results;
		this.props.toggleImageInComposition({
			width: r[index].width,
			height: r[index].height,
			ratio: r[index].width / r[index].height,
			urls: r[index].urls,
			id: r[index].urls.thumb
		})
		
		r[index].isSelected = !this.props.results[index].isSelected
		this.props.setSearchResults(r)
		setTimeout(() => {
			this.forceUpdate()
		},10)
		
	}

	render(){
		return(
			<div className="searchResultsContainer">
				{this.props.results && this.props.results.map((r,i) => {
					
					return(
						<SearchResult
							isSelected={this.props.ids && this.props.ids.indexOf(r.urls.thumb) > -1}
							onClick={this.onImageClick.bind(this, i)} 
							key={i}
							index={i}
							image={r.urls}/>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = state => ({
  results: state.search.results,
  ids: state.composition.ids
})

const mapDispatchToProps = dispatch => bindActionCreators({
	setSearchResults,
	setLoading,
	toggleImageInComposition,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)