import React, { Component } from 'react'
import './index.css'
import { Button } from 'semantic-ui-react'

class ButtonDefault extends Component {
  render() {
    return (
      <Button className='buttonDefault' onClick={this.props.click}>
        {this.props.name}
      </Button>
    )
  }
}

export default ButtonDefault
