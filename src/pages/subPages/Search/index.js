import React, { Component } from 'react'
import './index.css'
import SearchBar from '../../components/SearchBar'
// import SearchCard from '../../components/SearchCard'
import SideMenu from '../SideMenu';

class Search extends Component{
  render(){
    return(
      <div>
        <SideMenu username='Guilherme' active='Monitoramento'/>
        <SearchBar/>
      </div>
    )
  }
}

export default Search