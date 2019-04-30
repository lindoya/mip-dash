import React, { Component } from 'react'
import './index.css'
import { Input, Label } from 'semantic-ui-react'


class InputDefault extends Component {
  size = this.props.size || {width:'85px'}
  render() {
    return (
        <Input labelPosition='left corner' className='formss'>
          <Label style={this.size} className='labelClass'>{this.props.label}</Label>
          <Input className='inputClass' type='text' placeholder={this.props.input}/>
        </Input>
    )
  }
}

export default InputDefault