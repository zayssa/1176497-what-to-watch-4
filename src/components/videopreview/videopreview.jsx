import React from "react";
import PropTypes from "prop-types";

class Videopreview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isActive) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.load();
    }
  }

  render() {
    return (
      <video ref={this.videoRef} muted src={this.props.preview} poster={this.props.poster} style={{
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
  }
}

Videopreview.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default Videopreview;
