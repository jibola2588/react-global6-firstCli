import React, { Component } from 'react'

export default class Card extends Component {
  render() {
 console.log(this.props.user);
 console.log(this.props.user.name);
 const {name,age,gender,isFav,img} = this.props.user
//   const user = this.props;
//   console.log(user.user);
//  console.log(user?.user?.name)
  return(
      <div className='w-[300px] h-[400px] p-4 shadow-sm'>
          <div className='w-[282px] h-[200px]'>
              <img src={img} alt=''  className='w-[100%] h-[100%] object-cover'/>
          </div>
          <div className='mt-3 space-y-1'> 
              <p>name : {name}</p>
             <p>age : {age}</p>
             <p>gender : {gender} </p>
             <p>fav : {isFav} </p>
          </div>
        
      </div>
    )
  }
}




