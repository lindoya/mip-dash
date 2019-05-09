import React, { Component } from 'react'
import './index.css'
import { Button, Icon } from 'semantic-ui-react'

class ButtonIcon extends Component{

  render(){
    return(
      <Button className='buttonIcon' onClick={this.props.onClick} icon>
      <Icon name='plus'/>
        {this.props.name}
      </Button>
    )
  }
}

export default ButtonIcon
