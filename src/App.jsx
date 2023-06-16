import  { Component } from 'react'
import Button from './components/Button'

// stateful
export default class App extends Component{ 
   render(){
    const age = 34;
     return(
        <div>
           <h3>Reuseable components</h3>
           <p>we like white soup at {age}</p>
           <div class='flex flex-col gap-2 '>
              <Button 
                text = 'click me'
              />
              <Button 
                text = 'apply now'
              />
              <Button 
                text = 'download here'
              />
              <Button 
              text = 'signup'
              />
              <Button
              text = 'signin'
               />
           </div>
        </div>
       
     )
   }
}













