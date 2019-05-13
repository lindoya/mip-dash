import React, { Component } from 'react'
import _ from 'lodash'
import './index.css'
import { Card, Search, Grid } from 'semantic-ui-react'
import ButtonDefault from '../Button'
import ButtonIcon from '../Button/ButtonIcon'
import Input from '../Input'
import { Redirect } from 'react-router-dom'


const source = _.times(5, () => ({
  title: "teste",
  description: "teste",
  price: "teste",
}))


class SearchBar extends Component {

  state = {
    changeSearchBar: false,
    DivIsVisible: true,
    RedirectState: false,
    urlToRedirect: '/logged/client',
  }

  onClickButton = url => {
    this.setState({
      RedirectState: true,
      urlToRedirect: url,
    })
  }

  componentWillMount() {
    this.resetComponent()
  }

  changeSearch = () => {
    this.setState({
      changeSearchBar: !this.state.changeSearchBar
    })
  }

  omitDiv = () => {
    this.setState({
      DivIsVisible: !this.state.DivIsVisible
    })
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    if (this.state.RedirectState) {
      console.log(this.state.urlToRedirect)
      return <Redirect to={this.state.urlToRedirect} />
    }
    
    if (this.state.changeSearchBar === false) {
      return (
        <div className="div-search">
          
          <Card className="card-search">
            <Grid className='grid'>
              <Search
                className='grid-menor'
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                {...this.props}
              />
              <ButtonDefault className='button-sla' name='Avançado' onClick={this.changeSearch} />
            </Grid>
          </Card>
          <div className='div-buttonsTool'>
            {this.props.buttons.map(button =>
              <ButtonIcon icon='plus' name={button.name} onClick={() => this.onClickButton(button.url)}/>)}
          </div>
        </div>
      )
    } else {
      if (this.state.DivIsVisible === false) {
        return (
          <div className='div-maior'>
            <div className='div-mainSearch'>
              <div className='div-buttonSearch'>
                <ButtonDefault name='Mostrar' onClick={this.omitDiv} />
                <ButtonDefault name='Busca simples' onClick={this.changeSearch} />
              </div>
            </div>
            <div className='div-buttonsTool-form'>
              {this.props.buttons.map(button =>
                <ButtonIcon icon='plus' name={button.name} />)}
            </div>
          </div>
        )
      }
      else {
        return (
          <div className='div-maior'>
            <div className='div-mainSearch'>
              <div className='div-buttonSearch'>
                <ButtonDefault name='Ocultar' onClick={this.omitDiv} />
                <ButtonDefault name='Busca simples' onClick={this.changeSearch} />
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
            <div className='div-buttonsTool-form'>
              {this.props.buttons.map(button =>
              <ButtonIcon icon='plus' name={button.name} onClick={() => this.onClickButton(button.url)}/>)}
            </div>
          </div>
        )
      }
    }
  }
}

export default SearchBar
