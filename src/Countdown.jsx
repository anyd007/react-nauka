import React from "react";
import propTypes from "prop-types";
import './Countdown.css'
import './../node_modules/semantic-ui-css/semantic.css'
const Countdown = (props) => (
  <>
    <div className="countdown">
      <strong>{props.name}</strong> - {props.hour}:{props.minutes}
      <div className="countdown__icons">
          <i className='icon times'></i>
      </div>
    </div>
  </>
);
Countdown.propTypes = {
    name: propTypes.string,
    hour: propTypes.string,
    minutes:propTypes.string
}

export default Countdown;
