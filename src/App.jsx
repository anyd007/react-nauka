import React, {Component} from "react";
import Countdown from "./Countdown.jsx";
import "./App.css"
import EditEvent from "./EditEvent"
import uniqid from 'uniqid'

class App extends Component{
    constructor(){
        super();
        this.state = {
            events: [
                {id:0, name:'śniadanie', hour:'7', minutes:'00'},
                {id:1, name:'obiad', hour:'15', minutes:'00'},
                {id:2, name:'kolacja', hour:'19', minutes:'00'},
                
              
            ],
            editedEvents:{
                id:uniqid(),
                name: '',
                hour:'',
                minutes:''
            }
        }
        this.handleEventEvent = this.handleEventEvent.bind(this)
        this.handleSaveEvent = this.handleSaveEvent.bind(this)
    }

   handleEventEvent = (val) =>{
       this.setState(prevEvent =>{
           return{
           editedEvents: Object.assign(prevEvent.editedEvents, val)
           }
       })
   }
   handleSaveEvent = ()=>{
    this.setState(prevEvent =>{
        return{
            events:[...prevEvent.events, prevEvent.editedEvents],
            editedEvents:{
                id:uniqid(),
                name: '',
                hour:'',
                minutes:''
            },
        
        }
    })}

   
   
    
    render(){
        const events = this.state.events.map(el =>{
            return <Countdown 
            key={el.id} 
            name={el.name} 
            hour={el.hour} 
            minutes={el.minutes} 
            // onRemove={}
            />
        })
        return(
            <div className="app"> {events} 
            <EditEvent 
            name={this.state.editedEvents.name}
            hour={this.state.editedEvents.hour}
            minutes={this.state.editedEvents.minutes}
            onInputChange={val => this.handleEventEvent(val)}
            onSave={ () =>this.handleSaveEvent()}/>
            </div>
        )
    }
}

export default App;
