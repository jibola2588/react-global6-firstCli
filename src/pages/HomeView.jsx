import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Section/>
        <Footer/>
      </div>
    )
  }
}
