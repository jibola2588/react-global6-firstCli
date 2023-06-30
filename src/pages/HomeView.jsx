import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import Counter from '../components/Counter'


export default class HomeView extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Section/>
        <Counter/>
        <Footer/>
      </div>
    )
  }
}
