import React, { Component } from 'react'
import {Header, Partition} from './StyledPractice'





export default class StyledComponent extends Component {
  render() {
    const styles = { 
      backgroundColor:'green',
      fontSize:'1.2rem'
    }
    return (
      <div>
        <Partition>
          PARTITION
        </Partition>
        
        <Header>This is for styled components</Header>
<header style={{backgroundColor:'green', fontSize:'1.5em', paddingLeft:'1rem'}}>this is for a styledncom</header>
        <p style={styles}>This is home</p>
        
      </div>
    )
  }
}
