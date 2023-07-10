import React, { Component } from 'react'
import {data} from '../assets/data'
import Card from './card'

export default class Section extends Component {
  render() {
    // console.log(data);
    return (
      <div className='mt-5 px-5 flex flex-wrap justify-between'>
          { 
            data.map(item => (
                <Card  key={item.id}  user= {item} />
            ))
          }
      </div>
    )
  }
}
