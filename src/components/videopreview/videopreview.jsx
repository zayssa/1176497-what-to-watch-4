import React from "react";
import PropTypes from "prop-types";

const Videopreview = ({preview}) => {
  return (
    <video autoPlay muted src={preview} style={{
      position: `absolute`,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: `auto`,
      width: `100%`,
      height: `auto`,
    }}/>
  );
};

Videopreview.propTypes = {
  preview: PropTypes.string.isRequired,
};

export default Videopreview;
