import  { Component } from 'react'
import Button from './components/Button'
import Lol from './lol';
import HomeView from './pages/HomeView';
import EventListener from './components/EventListener';
// stateful
export default class App extends Component{ 
   render(){
    const age = 34;
     return(
        <div>
          {/* <HomeView /> */}
           {/* <h3>Reuseable components</h3>
           <p>we like white soup at {age}</p>
           <div class='max-w-lg mx-auto flex flex-col gap-2 '>
              <Button 
                text = 'click me'
                color = 'red'
              />
              <Button 
                text = 'apply now'
                color = 'blue'
              />
              <Button 
              
                text = 'download here'
                color = 'orange'
              />
              <Button 
              text = 'signup'
              color = 'pink'
              />
              <Button
              text = 'signin'
              color = 'yellow'
               />
           </div>
           <div className="lol">
            <Lol />
           </div> */}

           <EventListener />
        </div>
       
     )
   }
}













