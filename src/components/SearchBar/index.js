import React, { Component } from 'react'
import _ from 'lodash'
import './index.css'
import { Card, Search, Grid, Icon } from 'semantic-ui-react'
import ButtonDefault from '../Button'

const source = _.times(5, () => ({
  title: "teste",
  description: "teste",
  price: "teste",
}))


class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
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

    return (
      <div className = "div-search">
        <Card className = "card-search">
          <Grid className= 'teste2'>
            <Grid.Column width={6}>
              <Search
                size = 'large'
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                {...this.props}
              />
            </Grid.Column>
            <div>
              <ButtonDefault name = 'Advanced'/>
            </div>
          </Grid>
        </Card>
      </div>
    )
  }
}

export default SearchBar
