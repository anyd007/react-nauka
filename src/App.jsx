import React, {Component} from "react";
import Countdown from "./Countdown.jsx";

class App extends Component{
    constructor(){
        super()
        this.state = {
    events: [
        {id:0,  name: 'śniadanie', time: '7:00'},
        {id:1, name: 'obiad', time: '15:00'}
    ]
        }
    }
    render(){
        return(
            <>
            <Countdown name="sniadanie" time="7:00" />
            <Countdown name="obiad" time="15:00" />
          </>
        )
    }
}

export default App;
