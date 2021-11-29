import React from "react";


const EditEvent = () =>{
    return(
        <div className="edit-event">
            <div className="edit-event__input-group">
                <label htmlFor="name"><strong>imię</strong></label>
                <input id="name" name="name" type='text' placeholder='podaj imię'></input>
            </div>
            
        </div>
    )
}

export default EditEvent