import  { Component } from 'react'
import Button from './components/Button'
import Lol from './lol';
import HomeView from './pages/HomeView';
// stateful
export default class App extends Component{ 
   render(){
    const age = 34;
     return(
        <div>
          <HomeView />
           {/* <h3>Reuseable components</h3>
           <p>we like white soup at {age}</p>
           <div class='max-w-xl mx-auto flex flex-col gap-2 '>
              <Button 
                text = 'click me'
                color = 'blue'
              />
              <Button 
                text = 'apply now'
                color = 'red'
              />
             
              <Button 
              text = 'signup'
              color = 'cyan'
              />
              <Button
              text = 'signin'
              color = 'yellow'
               />
           </div>
           <div className="lol">
            <Lol />
           </div> */}
        </div>
       
     )
   }
}













