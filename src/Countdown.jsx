import React from "react";
import propTypes from "prop-types";

const Countdown = (props) => (
  <>
    <div className="countdown">
      <strong>{props.name}</strong> - {props.time}
    </div>
  </>
);
Countdown.propTypes = {
    name: propTypes.string,
    time: propTypes.string,
}

export default Countdown;
