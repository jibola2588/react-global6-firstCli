import React, { Component } from 'react'
import {Header} from './StyledPractice'




export default class StyledComponent extends Component {
  render() {
    const styles = { 
      backgroundColor:'green',
      fontSize:'1.2rem'
    }
    return (
      <div>
        <Header>This is for styled components</Header>

        <p style={styles}>This is home</p>
        
      </div>
    )
  }
}
