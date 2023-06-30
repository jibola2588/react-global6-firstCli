import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import Counter from '../components/Counter'
import StyledComponent from '../components/StyledComponent'

export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = { 
      showComponent:true
    }
  }

  hideComponent = () => { 
    this.setState({
      showComponent : false
    })
  }
  render() {
    return (
      <div>
        { this.state.showComponent && <Counter/>}
        {/* <Navbar/>
        <Section/>
        <Footer/> */}
        <button  className='bg-red-600 text-white text-sm px-4 py-2' onClick={this.hideComponent}>Hide Component</button>


        <StyledComponent/>
      </div>
    )
  }
}
