import React, { Component } from 'react';
import '../styles/counter.css'
import styles from '../styles/counter.module.css'


export default class Counter extends Component {
  constructor(){
    super()
    this.state = {
      count : 100
    }; 
  }
 
  handleCount = () =>{
    this.setState({
      count : this.state.count +1
    })
  }

componentDidMount(){
 console.log(`counter has mounted and count is ${this.state.count}`);
  this.timer = setInterval(() => { 
   this.handleCount()
 },1000)
}

componentWillUpdate(){
  console.log(`counter has been updated and count is ${this.state.count}`);
}

componentWillUnmount(){
  console.log(`counter has unmounted and count is ${this.state.count}`);
  clearInterval(this.timer)
}
  render() {
    return (
      <div className='mt-5 pl-4'>  
        <p>count: {this.state.count}</p>

        <div className='btn'>Up National</div>

        <div className={styles.wrapper}>
           <span className={styles.span}>1</span>
           <span className={styles.span}>2</span>
           <span className={styles.span}>3</span>
        </div>
      </div>
    )
  }
}

