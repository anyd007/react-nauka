import React from "react";
import './EditEvent.css'


const EditEvent = props =>{
    return(
        <div className="edit-event">
            <div className="edit-event__input-group">
                <label htmlFor="name"><strong>imię</strong></label><br></br>
                <input id="name" name="name" type='text' placeholder='podaj imię'></input>
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="hour"><strong>godzina</strong></label><br></br>
                <input id="hour" name="hour" type='text' placeholder='podaj godzinę'></input>
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="minutes"><strong>minuty</strong></label><br></br>
                <input id="minutes" name="minutes" type='tel' placeholder='podaj minutę'></input>
            </div>
        <button onClick={() => props.onSave()} className="accept-btn">ok</button>
        <button className="cencel-btn">usuń</button>
        </div>
    )
}

export default EditEvent