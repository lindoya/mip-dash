import React, { Component } from 'react'
import './index.css'
import { Input, Label } from 'semantic-ui-react'


class InputDefault extends Component {
  sizeLabel = this.props.sizeLabel || { width: '85px' }
  sizeInput = this.props.sizeInput || { width: 'calc(100% - 85px)' }
  render() {
    return (
      <Input labelPosition='left corner' className='formss'>
        <Label style={this.sizeLabel} className='labelDefault'>{this.props.label}</Label>
        <Input style={this.sizeInput} className='inputDefault' type='text' placeholder={this.props.input} />
      </Input>
    )
  }
}

export default InputDefault