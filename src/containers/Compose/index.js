import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImageRail from '../../components/ImageRail'
import Canvas from '../../components/Canvas'
import SizeSelect from '../../components/SizeSelect'
import Button from '../../components/Button'

class Compose extends Component {

  componentWillReceiveProps(np){
    console.log(np.canvasWidth)
  }
  render(){
    return(
    <div>
      <SizeSelect />
      <ImageRail />
   
        <Canvas />

      <Button />
    </div>
    )
  }
} 
  


const mapStateToProps = state => ({
 
})

const mapDispatchToProps = dispatch => bindActionCreators({
 
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compose)