import React, { Component } from 'react'
import './index.css'
import ButtonDefault from '../Button'
import Input from '../Input'
import SearchBar from '../SearchBar';

class SearchCard extends Component {

  state={
    changeSearchBar: true
  }

  changeSearchToDefault = () => {
    this.setState({
      changeSearchBar: false
    })
  }

  render() {
    if(this.state.changeSearchBar === true){
    return (
      <div className='div-maior'>
        <div className='div-mainSearch'>
          <div className='div-buttonSearch'>
            <ButtonDefault name='Ocultar' />
            <ButtonDefault name='Busca simples' click={this.changeSearchToDefault}/>
          </div>
          <div className='div-searchCard'>
            <Input label='Cnpj' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite o cnpj' />
            <Input label='Cep' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite o cep' />
            <Input label='Razão Social' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite a razão social' />
            <Input label='Nome Fantasia' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite o nome fantasia' />
            <Input label='teste' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite o teste' />
            <Input label='teste' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite o teste' />
            <Input label='teste' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite o teste' />
            <Input label='teste' sizeInput={{ width: 'calc(100% - 120px)' }} sizeLabel={{ width: 120 }} input='Digite o teste' />
          </div>
        </div>
      </div>
    )
    }else{
      return(
        <SearchBar/>
      )
    }
  }
}

export default SearchCard