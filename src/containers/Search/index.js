import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from '../../components/Search'
import SearchResults from '../../components/SearchResults'

import {
  addToCount,
  subtractFromCount
} from '../../actions/counter'

const Home = props => (
  <div>
    <Search />
    <SearchResults />
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCount,
  subtractFromCount,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)