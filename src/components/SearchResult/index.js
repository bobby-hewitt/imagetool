import React, { Component } from 'react'
import './style.css'

export default class SearchResult extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }



  render(){
    
    return(
      <div className="searchResultContainer" onClick={this.props.onClick}>
        {this.props.isSelected &&
          <div className="selectedTick" />
        }
        <img src={this.props.image.small} />
        
      </div>
    )
  }
}
