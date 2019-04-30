import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import './index.css'
import SearchBar from '../SearchBar';
import FormContact from '../FormContact';
import FormAddress from '../FormAddress';
import FormChangePassword from '../FormChangePassword';
import FormChangeNameOrEmail from '../FormChangeNameOrEmail'

class CardDefault extends Component {
  render() {
    return (
      <div>
        <Card className='cardDefault'>
          <SearchBar />
        </Card>
        <Card className='cardDefault'>
          <FormChangePassword />
        </Card>
        <Card className='cardDefault'>
          <FormChangeNameOrEmail />
        </Card>
        <Card className='cardDefault'>
          <FormContact />
        </Card>
        <Card className='cardDefault'>
          <FormAddress />
        </Card>
      </div>
    )
  }
}

export default CardDefault